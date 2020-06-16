<template>
    <div class="cart">
        <div class="cart_info">
            <h2>购物车</h2>
            <div class="p_number">
                <div class="p_number_left">
                    <p>用餐人数:<span>{{peopleNum}}</span>人</p>
                    <p>备注:<span>{{p_mark}}</span></p>
                </div>
                <div class="p_number_right">
                    <router-link to="/" class="outline">
                        <img src="@/assets/images/edit.png" alt=""><span>修改</span>
                    </router-link>
                </div>
            </div>
            <div class="cart_p_num">
                <p>购物车中总共有<span>{{totalNumber}}</span>道菜</p>
                <p>合计：<span>¥{{pricetotale}}</span></p>
            </div>
        </div>
        <div class="cart_list_box">
            <template v-if="list.length">
                <div class=" input_box"> <input type="checkbox" @change="change()" v-model="allCheck" />全选</div>
                <ul class="cart_list">
                    <li v-for="(item,index) in list" :key="index">
                        <div><input type="checkbox"  v-model="item.satus" @change="itemChange()"/></div>
                        <div>
                            <router-link to="/pcontent">
                                <img :src="item.img" alt="" class="img">
                            </router-link>
                        </div>
                        <div><p class="p_left">{{item.name}}</p><p class="p_left">￥{{item.price}}</p></div>
                        <div class="cart_num">
                            <div class="fleft" @click="Handle(index)"  :class="status == index?'input_left': ''">-</div>
                            <input class="fleft" type="text" readonly="readonly" v-model="item.count">
                            <div class="input_right fleft" @click="Add(index)">+</div>
                        </div>
                        <div><button @click="remove(index)" class="del">移除</button></div>
                    </li>
                </ul>
            </template>
            <div v-else>购物车为空</div>
        </div>
        <div class="recommendList">
            <h3>本店顾客最常点的菜</h3>
            <ul class='searchList'>
                <li class="bd-rd5" v-for="(item,index) in recommendList" :key="index">
                    <router-link to="/pcontent">
                        <img class="bd-rd5" :src="item.img" alt="">
                        <p>{{item.title}}</p>
                        <p>¥{{item.price}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="cartBox" @click="confirmOrder()">
            <img src="@/assets/images/doorder.png" alt="">
            <p>下单</p>
        </div>
        <v-footer></v-footer>
    </div>
</template>
<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import { Dialog } from 'vant';
    import Navfoot from '@/components/Navfoot.vue'
    export default {
        name: 'Cart',
        components: {
            "v-footer": Navfoot,
        },
        data(){
            return {
                totalNumber:0,
                peopleNum:0,
                p_mark:'',
                num:1,
                status:99,
                recommendList:[
                    {img:require('@/assets/images/3.jpg'),title:'清炒苦瓜5',price:18},
                    {img:require('@/assets/images/zhuroubaicai.jpg'),title:'猪肉白菜5',price:25},
                    {img:require('@/assets/images/guzhou.jpg'),title:'鲜蔬菌菇粥5',price:35},
                    {img:require('@/assets/images/7.jpg'),title:'土豆牛腩5',price:18},
                    {img:require('@/assets/images/6.jpg'),title:'娃娃菜炖豆腐5',price:20},
                    {img:require('@/assets/images/7.jpg'),title:'香酥黄金鱼5',price:30},
                ],
                images: [
                    require('@/assets/images/7.jpg'),
                    require('@/assets/images/6.jpg')
                ],
                list: [{
                    id: 1,
                    name: "清炒苦瓜5",
                    price: 22,
                    count: 1,
                    img:require('@/assets/images/7.jpg'),
                    satus: false
                },
                    {
                        id: 2,
                        name: "猪肉白菜5",
                        price: 25,
                        count: 1,
                        img:require('@/assets/images/1.jpg'),
                        satus: false
                    },
                    {
                        id: 3,
                        name: "鲜蔬菌菇粥5",
                        price: 13,
                        count: 1,
                        img:require('@/assets/images/2.jpg'),
                        satus: false
                    },
                    {
                        id: 4,
                        name: "土豆牛腩5",
                        price: 35,
                        count: 1,
                        img:require('@/assets/images/3.jpg'),
                        satus: false
                    },
                    {
                        id: 5,
                        name: "娃娃菜炖豆腐5",
                        price: 10,
                        count: 1,
                        img:require('@/assets/images/4.jpg'),
                        satus: false
                    },
                ],
                allCheck: false,
            }
        },
        methods:{
            //减商品数量
            Handle: function(index) {
                if(this.list[index].count <= 1){
                    Dialog({ message: '1件起售' });
                    this.status = index;
                }else{
                    this.list[index].count--;
                }
            },
            //增加商品数量
            Add: function(index) {
                this.list[index].count++;
                this.status = this.status+index;
            },
            remove: function(index) {
                this.list.splice(index, 1)
            },
            //全选
            change: function() {
                var vm=this;
                vm.list.forEach(function(v) {
                    v.satus = vm.allCheck
                })
            },
            //单选勾住后全选
            itemChange:function(){
                var vm=this;
                var select=vm.list.filter(function(v){
                    return v.satus == true
                })
                select.length==vm.list.length ? vm.allCheck=true:vm.allCheck=false
            },


            confirmOrder(){
                let peopleNum = window.localStorage.getItem("peopleNum")?window.localStorage.getItem("peopleNum"):0;
                if(peopleNum  == 0 ){
                    Dialog({ message: '确定人数后选择商品再提交！！' });
                }else{
                    let totalNumber = this.totalNumber;
                    if(totalNumber == 0){
                        Dialog({ message: '请选择商品后在下单！' });
                    }else{
                        this.$router.push({ path: '/confirmOrder' });
                    }
                }
            },
            people(){
                this.peopleNum = window.localStorage.getItem("peopleNum")?window.localStorage.getItem("peopleNum"):0;
                this.p_mark = window.localStorage.getItem("p_mark")?window.localStorage.getItem("p_mark"):'无';
            }
        },
        computed: {
            //计算总价
            pricetotale: function() {
                let that = this;
                let tatol = 0;
                let t_Number = 0;
                for(var i = 0; i < this.list.length; i++) {
                    var item = this.list[i];
                    if(item.satus==true){
                        tatol += item.price * item.count;
                        t_Number = t_Number+1;
                    }
                }
                that.totalNumber = t_Number;//点菜的个数
                //千位分隔符正则
                return tatol.toString().replace(/\B(?=(\d{3})+$)/g, ',')
            }
        },
        mounted(){
            let that = this
            that.people();
        },
    }
</script>
<style scoped>
    .cart{
        padding:1rem;
    }
    .cart_info,.recommendList{
        background: #fff;
        border-radius: .5rem;
        padding: .5rem;
    }
    .recommendList{
        margin-top: 2rem;
    }
    .recommendList h3{
        margin-top: .5rem;
    }
    .cart_info h2{
        padding:.8rem 0;
        border-bottom: 1px solid #eee;
        font-size: 1.8rem;
        text-align: center;
    }
    .p_number{
        border-bottom: 1px solid #eee;
        overflow: auto;
    }
    /*左侧盒子*/
    .p_number_left{
        padding:.5rem 0;
        display: inline-block;
        float:left;
        color:red;
        text-align: left;
    }
    /*右侧盒子*/
    .p_number_right{
        padding:.5rem 0;
        float:right;
        width: 4rem;
        height: 4rem;
        margin-right: 2.5rem;
        text-align: center;
    }
    .p_number_right img{
        display: inline-block;
        width: 1.8rem;
        height: 1.8rem;
        margin-left: 1.3rem;
    }
    .p_number_right span{
        float:right;
    }

    .cart_p_num{
        display: block;
        clear: both;
        padding:.8rem 0;
        border-bottom: 1px solid #eee;
        text-align: center;
        overflow: auto;
    }
    .cart_p_num p{
        text-align: left;
        width: 100%;
        float: left;
    }
    .cart_p_num p span{
        color:red;
    }

    .cart_list_box{
        background: #fff;
        border-radius: .5rem;
        margin-top: 1.5rem;
    }
    .cart_list{
        padding: 1.2rem .5rem;
    }

    .input_box{
        float:left;
        padding-bottom: 1rem;
        margin-top: 1rem;
        margin-left: .6rem;
    }
    .img{
        width: 4rem;
        height: 4rem;
        border-radius: 10%;
    }
    .cart_num{
        margin-top: .5rem;
    }
    .cart_num div{
        margin-top: .4rem;
        width:2.8rem;
        height: 2.8rem;
        text-align: center;
        line-height: 2.8rem;
        color:red;
        border:1px solid #eee;
        font-size:2rem;
    }
    .cart_num input{
        margin-top: .4rem;
        width: 2.8rem;
        outline: none;
        text-align: center;
        height: 2.8rem;
        border: none;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }
    .cart_list li{
        clear: both;
        width: 100%;
        border-bottom: 1px solid #eee;
        overflow: auto;
        padding:1rem 0;
    }
    .cart_list li>div:first-child input{
        margin-top: 1.2rem;
    }
    .cart_list li>div:nth-child(3){
        width: 18%;
    }
    .cart_list li>div:last-child{
        margin-right: 0;
        float: right;
    }
    .cart_list li>div{
        float:left;
        margin-right: 4%;
        overflow: auto;
        font-size: 1rem;
    }
    .del{
        display: inline-block;
        float: right;
        background: #ccc;
        color: #fff;
        height: 2rem;
        border: none;
        padding: 0 .5rem;
        border-radius: .5rem;
        margin-top: 1.5rem;
        margin-right: .5rem;
        line-height: 2rem;
    }

    .searchList{
        display: flex;
        flex-wrap: wrap;
        padding: 0px .5rem;
        margin-top: 1rem;
    }
    .searchList li{
        width: 29%;
        margin:.5rem auto;
        margin-right:6%;
        background: #fff;
    }
    .searchList li:nth-child(3n){
        margin-right:0;
    }
    .searchList li:last-child{
        margin-right: 0;
    }
    .searchList li img{
        display:block;
        width: 100%;
        height: 8rem;
    }
    .searchList li a{
        color: #666;
        text-decoration: none;
    }
    .cartBox img{
        width: 1.8rem;
        height: 1.8rem;
    }
    .cartBox{
        width: 5rem;
        height: 5rem;
        background: red;
        border-radius: 50%;
        color:#fff;
    }
</style>
