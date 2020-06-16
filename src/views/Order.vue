<template>
    <div class="order">
        <van-nav-bar
                title="我的订单"
                left-text="返回"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-tabs v-model="active" @click="changeOrder(active)">
            <van-tab title="全部订单" >
                <v-orderList :orderList='orderList'></v-orderList>
            </van-tab>
            <van-tab title="待付款" >
                <v-orderList :orderList='orderList'></v-orderList>
            </van-tab>
        </van-tabs>
        <v-footer></v-footer>
    </div>
</template>
<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import OrderList from '@/components/OrderList.vue'
    import Navfoot from '@/components/Navfoot.vue'
    export default {
        name: 'Order',
        components: {
            'v-orderList':OrderList,
            "v-footer": Navfoot,
        },
        data(){
            return {
                active: 2,
                orderList:[],
            }
        },
        methods: {
            onClickLeft() {
                this.$router.go(-1);//返回上一层
            },
            changeOrder(index) {
                console.log(index);
                if (index == 0) {
                   this.orderList = [
                       {stateName:"制作中",OrderTime:"2020-06-04 12:06:36",totalCount:4,totalPrice:150,List:[
                               {img:require('@/assets/images/6.jpg'),title:'娃娃菜炖豆腐',price:20,count:1},
                               {img:require('@/assets/images/7.jpg'),title:'香酥黄金鱼',price:30,count:2},
                               {img:require('@/assets/images/zhuroubaicai.jpg'),title:'猪肉白菜',price:25,count:1},
                               {img:require('@/assets/images/guzhou.jpg'),title:'鲜蔬菌菇粥',price:35,count:1}
                           ]
                       },
                       {stateName:"未支付",OrderTime:"2020-06-07 15:06:36",totalCount:3,totalPrice:130,List:[
                               {img:require('@/assets/images/zhuroubaicai.jpg'),title:'猪肉白菜2',price:25,count:1},
                               {img:require('@/assets/images/guzhou.jpg'),title:'鲜蔬菌菇粥2',price:35,count:1},
                               {img:require('@/assets/images/7.jpg'),title:'香酥黄金鱼2',price:30,count:2},
                           ]
                       },
                       {stateName:"已完成",OrderTime:"2020-06-05 18:06:36",totalCount:2,totalPrice:60,List:[
                               {img:require('@/assets/images/zhuroubaicai.jpg'),title:'猪肉白菜5',price:25,count:1},
                               {img:require('@/assets/images/guzhou.jpg'),title:'鲜蔬菌菇粥5',price:35,count:1},
                           ]
                       },
                   ]
                }else{
                    this.orderList = [
                        {stateName:"未支付",OrderTime:"2020-06-07 15:06:36",totalCount:3,totalPrice:130,List:[
                                {img:require('@/assets/images/zhuroubaicai.jpg'),title:'猪肉白菜2',price:25,count:1},
                                {img:require('@/assets/images/guzhou.jpg'),title:'鲜蔬菌菇粥2',price:35,count:1},
                                {img:require('@/assets/images/7.jpg'),title:'香酥黄金鱼2',price:30,count:2},
                            ]
                        },
                    ]
                }
            }
        },
        mounted(){
            let that = this
            that.changeOrder(0);
        },
        computed: {

        }
    }
</script>
<style scoped>
    .van-nav-bar__text {
        color: #000;
    }
    /*.orderListFoot p:first-child{*/
        /*float: right;*/
        /*margin-right: .5rem;*/
    /*}*/
</style>
