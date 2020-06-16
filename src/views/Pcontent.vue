<template>
    <div class="pcontent">
        <router-link to="/home">
            <div class="back">返回</div>
        </router-link>
        <div class="p_content">
            <div class="p_info bg-fff">
                <van-swipe class="my-swipe"  indicator-color="white">
                    <van-swipe-item v-for="(item,index) in images"  :key="index" @click="onChange(index)"><img :src="item" alt=""></van-swipe-item>
                </van-swipe>
                <van-image-preview v-model="show" :images="images" @change="onChange">
                    <template v-slot:index>第{{ index }}页</template>
                </van-image-preview>
                <h2 class="left">香酥黄金鱼</h2>
                <p class="left">22/份</p>
            </div>
            <div class="p_detial bg-fff">
                <h3 class="left">
                    商品详情
                </h3>
                <div class="p_content left">
                    <p>香酥黄金鱼</p>
                </div>
            </div>
        </div>
        <div class="cart">
            <strong class="fleft">数量:</strong>
            <div class="cart_num fleft">
                <div class="fleft" @click="decNum()"  :class="status == true?'input_left': ''">-</div>
                <input class="fleft" type="text" readonly="readonly" v-model="num">
                <div class="input_right fleft" @click="incNum()">+</div>
            </div>
            <!--<botton type="button" name="" class="cartButton" @click="addCart()">加入购物车</botton>-->
            <input type="tebuttonxt" class="cartButton" @click="addCart()" value="加入购物车">
        </div>
    </div>

</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import { Dialog } from 'vant';
    export default {
        name: 'Pcontent',
        components: {
        },
        data(){
            return {
                show: false,
                index: 0,
                num:1,
                status:false,
                images: [
                    require('@/assets/images/7.jpg'),
                    require('@/assets/images/6.jpg')
                ],
            }
        },
        methods:{
            onChange(index) {
                this.index = index+1;
                this.show = true;

            },
            // 加
            incNum(){
                ++this.num;
                this.status = false;
            },
            // 减
            decNum(){
                let number = this.num;
                if(number <= 1){
                    Dialog({ message: '1件起售' });
                    this.status = true;
                }else{
                    --this.num;
                }
            },
            //加入购物车
            addCart(){
                //这里调用后台方法，成功后页面跳转
                this.$router.push({ path: 'home' })
            }
        }
    }
</script>
<style scoped>
    .back:before {
        content: "";
        display: block;
        width: .8rem;
        height: .8rem;
        border-left: .2rem solid #fff;
        border-bottom: .2rem solid #fff;
        float: left;
        position: relative;
        top: 1.3rem;
        left: .6rem;
        transform: rotate(45deg);
        margin-right: .4rem;
    }
    .back{
        height: 4rem;
        line-height: 4rem;
        width: 4rem;
        border-radius: 50%;
        background: #000;
        position: fixed;
        top: .5rem;
        left: .5rem;
        color: #fff;
        z-index:3;
    }
    .bg-fff{
        overflow: auto;
        background: #fff;
    }
    .p_info img{
        display: block;
        width: 100%;
        height:18rem;
    }
    .p_info p{
        color:red;
    }
    .p_detial{
        margin-top: 1rem;
    }
    .left{
        clear: both;
        float:left;
        padding:.2rem  .5rem;
    }
    /*底部开始*/
    .cart{
        position: fixed;
        bottom: 0;
        background: #fff;
        width: 100%;
        height: 4.4rem;
        border-top: 1px solid #eee;
    }
    .cart strong {
        line-height: 4.4rem;
        flex: 1;
        font-size: 1.6rem;
        padding: 0rem .5rem;
    }
    .cart_num div{
        margin-top: .4rem;
        width:3.4rem;
        height: 3.4rem;
        text-align: center;
        line-height: 3.4rem;
        color:red;
        border:1px solid #eee;
        font-size:2.4rem;
    }
    .cart_num input{
        margin-top: .4rem;
        width: 3.2rem;
        outline: none;
        text-align: center;
        height: 3.4rem;
        border: none;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }
    .cartButton{
        width: 7.6rem;
        display: inline-block;
        float: right;
        background: red;
        color: #fff;
        height: 3rem;
        border: none;
        padding: 0 .5rem;
        border-radius: .5rem;
        margin-top: .8rem;
        margin-right: .5rem;
        line-height: 3rem;
        font-size: 1.4rem;
    }

</style>
