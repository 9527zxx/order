<template>
    <div class="EditPeopleinfo">
        <div class="content_box">
            <header class="start_header">
                <img src="../assets/images/canju.png" alt="">
                修改用餐人数
            </header>
            <p class='notice'>请选择正确的用餐人数</p>
            <div class="content">
                <ul class='list'>
                    <li v-for = "(item,key) in userList" :key="key" @click="checked(key)"><span :class="{'active':item.status===true}">{{item.name}}人</span></li>
                </ul>
                <div class='mark_input'>
                    <input type="text" placeholder="请输入您的口味要求，忌口等（可不填）" v-model = "p_mark">
                </div>
                <ul class="mark_list">
                    <li v-for = "(item,index) in optionList" :key="index" @click="checked1(index)"><span :class="{'active':item.status===true}">{{item.name}}</span></li>
                </ul>
            </div>
        </div>
        <div class='btn_box'>
            <div class='cancel_btn' @click="cancel()">
                <span>
                    取消
                </span>
            </div>
            <div class='confirm_btn' @click="addPeopleInfo()" >
              <span>
                  确定
              </span>
            </div>
        </div>
    </div>

</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import { Dialog } from 'vant';
    export default {
        name: 'EditPeopleinfo',
        components: {
            // HelloWorld
        },
        data(){
            return {
                p_mark:'',
                key:'',
                userList:[
                    {status:false,name:'1'},
                    {status:false,name:'2'},
                    {status:false,name:'3'},
                    {status:false,name:'4'},
                    {status:false,name:'5'},
                    {status:false,name:'6'},
                    {status:false,name:'7'},
                    {status:false,name:'8'},
                    {status:false,name:'9'},
                    {status:false,name:'10'},
                    {status:false,name:'11'},
                    {status:false,name:'12'},
                ],
                optionList:[
                    {status:false,name:'打包'},
                    {status:false,name:'微辣'},
                    {status:false,name:'中辣'},
                ]
            }
        },
        methods:{
            checked(name){
                let that = this;
                that.userList.forEach(function(item,key){
                    if(name == key){
                        item.status = !item.status;
                        if(item.status == true){
                            that.key  =  key;
                        }else{
                            that.key  =  '';
                        }
                    }else{
                        item.status = false;
                    }
                });
            },
            //选择备注
            checked1(name){
                let that = this;
                that.optionList.forEach(function(item,key){
                    if(name == key){
                        item.status = !item.status;
                        if(item.status == true){
                            that.p_mark = item.name;
                        }else{
                            that.p_mark = '';
                        }

                    }else{
                        item.status = false;
                    }
                });
            },
            //确认提交
            addPeopleInfo(){
                let that = this;
                let index = that.key;
                console.log(index);
                if(index.length == 0){
                    Dialog({ message: '请先选择用餐人数' });
                }else{
                    let peopleNum = window.localStorage.getItem("peopleNum")?window.localStorage.getItem("peopleNum"):0;
                    window.localStorage.setItem('peopleNum',that.userList[index].name)
                    window.localStorage.setItem('p_mark',that.p_mark)
                    if(peopleNum == 0){
                        this.$router.push('/home')
                    }else{
                        this.$router.push('/cart')
                    }

                }
            },
            //取消
            cancel(){
                let peopleNum = window.localStorage.getItem("peopleNum")?window.localStorage.getItem("peopleNum"):0;
                if(peopleNum == 0){
                    Dialog({ message: '随意看看后，在购物车选择人数！' });
                    this.$router.push('/home')
                }else{
                    this.$router.push('/cart')
                }
            },
            people(){
                this.p_mark = window.localStorage.getItem("p_mark")?window.localStorage.getItem("p_mark"):'';
            },
        },
        mounted(){
            let that = this;
            let peopleNum = window.localStorage.getItem("peopleNum")?window.localStorage.getItem("peopleNum"):0;
            if(peopleNum != 0){
                that.checked(peopleNum-1);
            }
            that.people();

        },
    }
</script>
<style scoped>
    .start_header{
        width: 12rem;
        height: 3.2rem;
        background: #000;
        color:#fff;
        margin:0 auto;
        line-height: 3.2rem;
        border-radius:.5rem;
        margin-top: 5rem;
    }
    .start_header img{
        display:inline-block;
        width: 2.2rem;
        height: 2.2rem;
        position: relative;
        top: .6rem;
        left:0rem;
    }
    .notice{
        color:red;
        margin-top: 1.5rem;
        padding:.5rem;
    }
    .list,.mark_list{
        display:flex;
        flex-wrap: wrap;
        padding:.5rem;
    }
    .list li,.mark_list li{
        width: 25%;
        padding:.5rem;
        box-sizing: border-box;
    }
    .list li span,.mark_list li span{
        display:block;
        width: 100%;
        height: 3.2rem;
        line-height: 3.2rem;
        text-align:center;
        border:1px solid #ccc;
        border-radius:.5rem;
    }
    .list li span.active,.mark_list li span.active{
        background: red;
        color:#fff;
    }
    .mark_input{
        padding:.9rem;
        margin: 1.5rem auto;
    }
    .mark_input input{
        width: 100%;
        height: 3.2rem;
        outline:none;
        border:1px solid #ccc;
        border-radius:.5rem;
        text-indent:.5rem;
    }

    .btn_box{
        width: 20rem;
        margin:3.5rem auto;
    }
    .btn_box div{
        width: 5rem;
        height: 5rem;
        background: red;
        color:#fff;
        border-radius: 50%;
        line-height: 5rem;
    }
    .cancel_btn{
        float:left;
    }
    .cancel_btn a{
        display:inline-block;
        color:#fff;
        line-height: 5rem;
    }
    .confirm_btn{
        float:right;
        line-height: 5rem;
    }
</style>
