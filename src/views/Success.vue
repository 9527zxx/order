<template>
    <div class="success">
        <div class="success_top">
            <img src="@/assets/images/success.png" alt="">
            <div class="success_right">
                <h2>支付成功</h2>
                <p>期待您再次光临!</p>
            </div>
        </div>
        <ul class="success_list">
            <li>
                <span>订单状态</span>
                <span>已完成</span>
            </li>
            <li>
                <span>桌号</span>
                <span>03号</span>
            </li>
            <li>
                <span>人数</span>
                <span>4人</span>
            </li>
            <li>
                <span>订单号</span>
                <span>121412412512512</span>
            </li>
            <li>
                <span>结账时间</span>
                <span>2018-04-15</span>
            </li>
            <li>
                <span>支付金额</span>
                <span>￥79</span>
            </li>
        </ul>
        <v-footer></v-footer>
    </div>
</template>
<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import Navfoot from '@/components/Navfoot.vue'
    export default {
        name: 'Success',
        components: {
            "v-footer": Navfoot,
        },
        data(){
            return{

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
    .success_top{
        margin: 4rem auto;
        display: flex;
        border: 1px solid #eee;
        border-radius: 2rem;
        background: #fff;
    }
    .success_top img{
        width: 6rem;
        height: 6rem;
    }
    .success_right{
        padding-left: 1rem;
        flex: 1;
        padding-top: 1rem;
    }
    .success_right p,.success_right h2{
        text-align: left;
    }

    .success_list{
        background: #fff;
        overflow: auto;
        padding-top: 1rem;
        padding-bottom: 1rem;
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
</style>
