<template>
    <div class="order" >
        <div class="orderListBox" v-for="(item,index) in orderList" :key="index">
            <div class="orderListTop">
                <p class="orderListTop_left">订单状态：<span>{{item.stateName}}</span></p>
                <p class="orderListTop_right">下单时间：<span>{{item.OrderTime}}</span></p>
            </div>
            <ul class="orderList">
                <router-link to="/orderDetails">
                    <li v-for="(item1,index1) in item.List" :key="index1"  class="outline">
                        <img :src='item1.img' alt="">
                        <div>
                            <p>{{item1.title}}</p>
                            <p>￥{{item1.price}}元</p>

                        </div>
                        <div class="price">
                            <p>{{item1.count}}份</p>
                            <p>￥{{item1.count*item1.price}}元</p>
                        </div>
                    </li>
                </router-link>
            </ul>
            <div class="orderListFoot">
                <span>总计{{item.totalCount}}道菜</span>
                <span> 总计：￥{{item.totalPrice}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OrderList",
        // components:{
        //     HelloWorld
        // }
        data(){
            return {
            }
        },
        methods:{

        },
        props:{
            orderList:{
                type:Array,
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .orderListBox{
        background: #fff;
        border-radius: .5rem;
        padding: 1.5rem;
        overflow: auto;
        margin-top: 1rem;
    }
    .orderListTop_left{
        float: left;
    }
    .orderListTop_right{
        float: right;
    }
    .orderListTop{
        overflow: auto;
        margin-bottom: 1.2rem;
    }
    .orderList li{
        float: left;
        width: 100%;
        margin-bottom: 1.5rem;
    }
    .orderList li img{
        float: left;
        width: 4rem;
        height: 4rem;
        border-radius: 10%;
        margin-right: 10%;
    }
    .orderList li div{
        display: inline-block;
        float: left;
        width: 30%;
        margin-right: 10%;
    }
    .orderList li div.price{
        margin-right: 0;
    }
    .orderListFoot{
        overflow: auto;
        clear: both;
        float:right;
    }
</style>
