<template>
    <div class="confimorder">
        <div class="confirmOrder_top">
            <img src="@/assets/images/timer.png" alt="">
            <div class="confirmOrdr_right">
                <h2>118号桌待门店接单</h2>
                <p>请及时联系服务员确认一点菜品信息!</p>
            </div>
            <h3>已点菜品27份,合计 : <span>400元</span></h3>
            <div class="confirmOrder_pay">
                <p><button @click="WePay()">微信立即支付</button></p>
                <p><button @click="AliPay()">支付宝立即支付</button></p>
            </div>
        </div>

        <div class="list">
            <h3>菜品详情:</h3>
            <ul>
                <li v-for="(item,index) in confirmList" :key="index">
                    <div class="title">{{item.title}}</div>
                    <div class="num">{{item.count}}份</div>
                    <div class="price">￥{{item.price}}元</div>
                </li>
            </ul>
        </div>
        <v-footer></v-footer>
    </div>
</template>
<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import Navfoot from '@/components/Navfoot.vue'
    export default {
        name: 'ConfirmOrder',
        components: {
            "v-footer": Navfoot,
        },
        data(){
            return {
                confirmList:[
                    {title:'清炒苦瓜5',price:18,count:1},
                    {title:'猪肉白菜5',price:25,count:1},
                    {title:'鲜蔬菌菇粥5',price:35,count:1},
                    {title:'土豆牛腩5',price:18,count:1},
                    {title:'娃娃菜炖豆腐5',price:20,count:1},
                    {title:'香酥黄金鱼5',price:30,count:1},
                ],
            }
        },
        methods: {
            WePay(){
                //这里调用后台方法，成功后页面跳转
                this.$router.push({ path: '/order' })
            },
            AliPay(){
                //这里调用后台方法，成功后页面跳转
                this.$router.push({ path: '/success' })
            },
        },
        mounted(){
        },
        computed: {

        }
    }
</script>
<style scoped>
	.confimorder{
		overflow: auto;
	}
    .confirmOrder_top,.list{
        clear: both;
        background: #fff;
        border-radius: .5rem;
        margin: 1rem;
        overflow: auto;
    }
    .list{
        margin-top: 2rem;
    }
    .confirmOrder_top img{
        padding-top: .5rem;
        float: left;
        width: 5.6rem;
        height: 5.6rem;
    }
    .confirmOrder_top div{
        padding-top: .5rem;
        text-align: left;
    }
    .confirmOrder_top h3{
        clear: both;
        float: left;
        height: 5rem;
        line-height: 5rem;
        padding:.5rem;
        text-align: left;
    }
    .confirmOrder_top h3 span{
        color:red;
        font-size:18px;
    }
    
    .confirmOrder_pay{
        clear: both;
        float: left;
    }
    .confirmOrder_pay p{
        margin-bottom: 5rem;
        margin-left: .4rem;
    }
    .confirmOrder_pay p:last-child{
        margin-bottom: 0;
    }

    .list ul{
		overflow: auto;
        margin: 1rem .3rem;
    }
    .list h3{
        display: block;
        text-align: left;
        margin: 1rem .3rem;
    }
    .list ul li{
        overflow: auto;
        margin-top: 1rem;
    }
    .list ul li div{
        float: left;
        width: 30%;
        margin-right: 5%;
    }
    .list ul li div:last-child{
        margin-right: 0;
    }
</style>
