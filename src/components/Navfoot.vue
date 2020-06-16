<template>
    <div class="foot" :class = "!flag == false ? 'zindex' : '' ">
        <div class="navigation" @click="flag=!flag" >
            <img src="../assets/images/navigation.png" alt="">
            <p>导航</p>
        </div>
        <div class="footer_nav_show" v-if="flag">
            <ul class="list">
                <li @click="switchTo('/home')">
                    <img src="../assets/images/menu.png"/>
                    <p>菜单</p>
                </li>
                <li @click="switchTo('/cart')">
                    <img src="../assets/images/cart.png"/>
                    <p>购物车</p>
                </li>
                <li @click="switchTo('/order')">
                    <img src="../assets/images/order.png"/>
                    <p>订单</p>
                </li>
                <li @click="switchTo('/confirmOrder')">
                    <img src="../assets/images/wallet.png"/>
                    <p>结账</p>
                </li>
                <li @click="flag=!flag">
                    <img src="../assets/images/close.png"/>
                    <p>返回</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navfoot",
        // components:{
        //     HelloWorld
        // }
        data(){
            return {
                flag:false,
                navActive:false,
            }
        },
        methods:{
            switchTo(index){
                //获取当前页面的路由
                let router_path = this.$route.path;
                //判断当前路由和点击路由是否一致，一致则刷新当前页面；否则页面跳转。
                if(router_path == index){
                    this.$router.go(0);
                }else{
                    this.$router.replace(index)
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .foot, .list li:last-child{
        position: fixed;
        left:3%;
        bottom:3%;
    }
    .zindex{
        z-index: 3;
    }
    .navigation,.list li{
        display: block;
        color: #fff;
        background: #000;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }
    .list li a{
        outline:none;
        color:#fff;
    }
    .navigation img,.list li img{
        margin-top: .6rem;
        width: 1.8rem;
        height: 1.8rem;
    }
    .list {
        display: block;
        width: 100%;
        position: fixed;
        left:.1rem;
        bottom:.5rem;
    }
    .list li{
        float:left;
    }
	
   .list li:nth-child(2){
        margin-top: 7%;
    }
    .list li:nth-child(3){
        margin-top: 20%;
    }
    .list li:nth-child(4){
        margin-top: 40%;
		margin-left: -7%;
    }
</style>
