<template>
    <div class="OrderDetails">
        <ul class="success_list">
            <li>
                <span>结账时间</span>
                <span>{{list.OrderTime}}</span>
            </li>
            <li>
                <span>订单号</span>
                <span>{{list.orderNum}}</span>
            </li>
            <li>
                <span>订单状态</span>
                <span class="red">{{list.stateName}}</span>
            </li>
            <li>
                <span>桌号</span>
                <span>{{list.number}}号</span>
            </li>
            <li>
                <span>人数</span>
                <span>{{list.peopleNum}}人</span>
            </li>
        </ul>

        <div class="detailsList">
            <ul class="orderList">
                <router-link to="/orderDetails">
                    <li v-for="(item,index) in list.List" :key="index"  class="outline">
                        <img :src='item.img' alt="">
                        <div>
                            <p>{{item.title}}</p>
                            <p>￥{{item.price}}元</p>

                        </div>
                        <div class="price">
                            <p>{{item.count}}份</p>
                            <p>￥{{item.count*item.price}}元</p>
                        </div>
                    </li>
                </router-link>
            </ul>
            <div class="orderListFoot">
                <span>总计{{list.totalCount}}道菜</span>
                <span> 总计：￥{{list.totalPrice}}</span>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>
<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import Navfoot from '@/components/Navfoot.vue'
    export default {
        name: 'OrderDetails',
        components: {
            "v-footer": Navfoot,
        },
        data(){
            return{
                list:
                    {stateName:"制作中",OrderTime:"2020-06-04 12:06:36",totalCount:4,totalPrice:150,orderNum:121412412512566,number:12,peopleNum:4,List:[
                            {img:require('@/assets/images/6.jpg'),title:'娃娃菜炖豆腐',price:20,count:1},
                            {img:require('@/assets/images/7.jpg'),title:'香酥黄金鱼',price:30,count:2},
                            {img:require('@/assets/images/zhuroubaicai.jpg'),title:'猪肉白菜',price:25,count:1},
                            {img:require('@/assets/images/guzhou.jpg'),title:'鲜蔬菌菇粥',price:35,count:1}
                        ]
                    },
            }
        },
        methods: {
        },
        mounted(){
        },
        computed: {

        }
    }
</script>
<style scoped>

    .success_list{
        background: #fff;
        margin:1rem;
        border-radius: .5rem;
    }
    .success_list li{
        overflow: auto;
        padding: .5rem 1rem;
    }
    .success_list li span{
        float: left;
    }
    .success_list li span:last-child{
        float: right;
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
    .detailsList{
        background: #fff;
        overflow: auto;
        margin:1rem;
    }
    .detailsList ul{
        padding:1rem  .5rem;
        overflow: auto;
    }
    .detailsList>div{
        margin-right: 2rem;
        padding-bottom: 1.5rem;
    }
</style>
