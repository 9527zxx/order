<template>
    <div class="home">
        <header>
            <ul class="heard_list bd-rd5">
                <li v-for="(item,index) in heardList" :key='index' @click="change(index)"  :class = "navActive == index ? 'addclass' : '' "><img :src="item.img" alt="" ><span>{{item.title}}</span></li>
            </ul>
        </header>

        <div class="listBox" >
            <!--热销榜列表开始-->
            <div v-if="Status === 1" >
                <div class="menuListBox" v-for="(item,index) in list" :key="index">
                    <h3>{{item.CategoryTitle}}</h3>
                    <ul class='menu_list'>
                        <li class="bd-rd5" v-for="(item1,index1) in item.CategoryList" :key="index1">
                            <router-link to="/pcontent">
                                <img class="bd-rd5" :src="item1.img" alt="">
                                <p>{{item1.title}}</p>
                                <p>¥{{item1.price}}</p>
                            </router-link>
                        </li>
                    </ul>
                </div>
                <!--侧边栏开始-->
                <div class="SideButtonBox"  >
                    <van-cell is-link @click="showPopup"  class="SideButton"><img class="bd-rd5" src="@/assets/images/nav.png" alt="">菜单</van-cell>
                    <van-popup v-model="show" position="left" class="SideListBox" >
                        <ul class="SideList">
                            <li v-for="(item,index) in SideList" :key="index" :value="item.type" @click="changeSideList(item.type,index)"  :class = "active == index ? 'addclass' : '' ">{{item.title}}</li>
                        </ul>
                    </van-popup>
                </div>
                <!--侧边栏结束-->
            </div>
            <!--热销榜列表结束-->
            <!--点过的菜列表开始-->
            <div v-else-if="Status === 2">
                <ul class='history'>
                    <li class="bd-rd5" v-for="(item,index) in list" :key="index">
                        <router-link to="/pcontent">
                            <img class="bd-rd5" :src="item.img" alt="">
                            <p>{{item.title}}</p>
                            <p>¥{{item.price}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
            <!--点过的菜列表结束-->
            <!--搜你喜欢列表开始-->
            <div  v-else-if="Status === 3">
                <ul class='searchList'>
                    <li class="bd-rd5" v-for="(item,index) in list" :key="index">
                        <router-link to="/pcontent">
                            <img class="bd-rd5" :src="item.img" alt="">
                            <p>{{item.title}}</p>
                            <p>¥{{item.price}}</p>
                        </router-link>
                    </li>
                </ul>
            </div>
            <!--搜你喜欢列表结束-->
        </div>
        <!--底部导航开始-->
        <div class="cartBox">
            <router-link to="/cart">
                <img src="@/assets/images/cart.png" alt="">
                <p>购物车</p>
                <span>9</span>
            </router-link>
        </div>
        <v-footer></v-footer>
        <!--底部导航结束-->

    </div>
</template>
<script>
    // @ is an alias to /src
    import Navfoot from '@/components/Navfoot.vue'
    export default {
        name: 'Home',
        components: {
            "v-footer": Navfoot,
        },
        data(){
            return {
                show:false,
                active : 0,
                navActive:0,
                Status: 1,
                heardList:[
                    {img:require('@/assets/images/rexiao.png'),title:'热销榜'},
                    {img:require('@/assets/images/caidan.png'),title:'点过的菜'},
                    {img:require('@/assets/images/sousuo.png'),title:'搜你喜欢'}
                ],
                list: [],
                SideList:[],
            }
        },
        methods: {
            change(index){
                let that =  this;
                that.navActive = index;
                console.log(index);
                if(index == 0){
                    that.Status = 1;
                    that.active = 0,
                    that.list = [
                        {CategoryTitle:"精选热菜",CategoryList:[
                                {img:require('@/assets/images/6.jpg'),title:'娃娃菜炖豆腐',price:20},
                                {img:require('@/assets/images/7.jpg'),title:'香酥黄金鱼',price:30},
                                {img:require('@/assets/images/zhuroubaicai.jpg'),title:'猪肉白菜',price:25},
                                {img:require('@/assets/images/guzhou.jpg'),title:'鲜蔬菌菇粥',price:35}
                            ]
                        },
                        {CategoryTitle:"特色菜",CategoryList:[
                                {img:require('@/assets/images/zhuroubaicai.jpg'),title:'猪肉白菜2',price:25},
                                {img:require('@/assets/images/guzhou.jpg'),title:'鲜蔬菌菇粥2',price:35},
                                {img:require('@/assets/images/7.jpg'),title:'香酥黄金鱼2',price:30},
                                {img:require('@/assets/images/1.jpg'),title:'玉米粥2',price:12},
                                {img:require('@/assets/images/6.jpg'),title:'娃娃菜炖豆腐2',price:20},
                            ]
                        },
                        {CategoryTitle:"诚心小炒",CategoryList:[
                                {img:require('@/assets/images/product.jpg'),title:'鸡杂',price:18},
                                {img:require('@/assets/images/3.jpg'),title:'清炒苦瓜5',price:18},

                            ]
                        },
                        {CategoryTitle:"田园时蔬",CategoryList:[
                                {img:require('@/assets/images/7.jpg'),title:'香酥黄金鱼4',price:30},
                                {img:require('@/assets/images/6.jpg'),title:'娃娃菜炖豆腐4',price:20},
                                {img:require('@/assets/images/zhuroubaicai.jpg'),title:'猪肉白菜4',price:25},
                            ]
                        },
                        {CategoryTitle:"粗粮主食",CategoryList:[
                                {img:require('@/assets/images/3.jpg'),title:'清炒苦瓜5',price:18},
                                {img:require('@/assets/images/zhuroubaicai.jpg'),title:'猪肉白菜5',price:25},
                                {img:require('@/assets/images/guzhou.jpg'),title:'鲜蔬菌菇粥5',price:35},
                                {img:require('@/assets/images/7.jpg'),title:'土豆牛腩5',price:18},
                                {img:require('@/assets/images/6.jpg'),title:'娃娃菜炖豆腐5',price:20},
                                {img:require('@/assets/images/7.jpg'),title:'香酥黄金鱼5',price:30},

                            ]
                        }
                    ]
                }else if(index == 1){
                    that.Status = 2;
                    that.list = [
                        {img:require('@/assets/images/6.jpg'),title:'青椒斩蛋',price:25},
                        {img:require('@/assets/images/product.jpg'),title:'鸡杂',price:18},
                        // {img:require('@/assets/images/zhuroubaicai.jpg'),title:'猪肉白菜',price:25}
                    ]
                }else{
                    that.Status = 3;
                    that.list = [
                                {img:require('@/assets/images/3.jpg'),title:'清炒苦瓜',price:18},

                                ]
                }

            },
            showPopup() {
                this.show = true;
            },
            getSideList(){
                let that =  this;
                that.SideList = [
                    {title:'全部',type:1},
                    {title:"精选热菜",type:2},
                    {title:"特色菜",type:3},
                    {title:"诚心小炒",type:4},
                    {title:"田园时蔬",type:5},
                    {title:"粗粮主食",type:6},

                ]
            },
            changeSideList(index,num){
                //这里调用后台方法  现模拟数据
                let that = this;
                that.active = num;
                if(index == 1){
                    that.list = [
                        {CategoryTitle:"精选热菜",CategoryList:[
                                {img:require('@/assets/images/6.jpg'),title:'娃娃菜炖豆腐',price:20},
                                {img:require('@/assets/images/7.jpg'),title:'香酥黄金鱼',price:30},
                                {img:require('@/assets/images/zhuroubaicai.jpg'),title:'猪肉白菜',price:25},
                                {img:require('@/assets/images/guzhou.jpg'),title:'鲜蔬菌菇粥',price:35}
                            ]
                        },
                        {CategoryTitle:"特色菜",CategoryList:[
                                {img:require('@/assets/images/zhuroubaicai.jpg'),title:'猪肉白菜2',price:25},
                                {img:require('@/assets/images/guzhou.jpg'),title:'鲜蔬菌菇粥2',price:35},
                                {img:require('@/assets/images/7.jpg'),title:'香酥黄金鱼2',price:30},
                                {img:require('@/assets/images/1.jpg'),title:'玉米粥2',price:12},
                                {img:require('@/assets/images/6.jpg'),title:'娃娃菜炖豆腐2',price:20},
                            ]
                        },
                        {CategoryTitle:"诚心小炒",CategoryList:[
                                {img:require('@/assets/images/product.jpg'),title:'鸡杂',price:18},
                                {img:require('@/assets/images/3.jpg'),title:'清炒苦瓜5',price:18},

                            ]
                        },
                        {CategoryTitle:"田园时蔬",CategoryList:[
                                {img:require('@/assets/images/7.jpg'),title:'香酥黄金鱼4',price:30},
                                {img:require('@/assets/images/6.jpg'),title:'娃娃菜炖豆腐4',price:20},
                                {img:require('@/assets/images/zhuroubaicai.jpg'),title:'猪肉白菜4',price:25},
                            ]
                        },
                        {CategoryTitle:"粗粮主食",CategoryList:[
                                {img:require('@/assets/images/3.jpg'),title:'清炒苦瓜5',price:18},
                                {img:require('@/assets/images/zhuroubaicai.jpg'),title:'猪肉白菜5',price:25},
                                {img:require('@/assets/images/guzhou.jpg'),title:'鲜蔬菌菇粥5',price:35},
                                {img:require('@/assets/images/7.jpg'),title:'土豆牛腩5',price:18},
                                {img:require('@/assets/images/6.jpg'),title:'娃娃菜炖豆腐5',price:20},
                                {img:require('@/assets/images/7.jpg'),title:'香酥黄金鱼5',price:30},

                            ]
                        }
                    ]
                }else if(index == 2){
                    that.list = [
                        {CategoryTitle:"精选热菜",CategoryList:[
                                {img:require('@/assets/images/6.jpg'),title:'娃娃菜炖豆腐',price:20},
                                {img:require('@/assets/images/7.jpg'),title:'香酥黄金鱼',price:30},
                                {img:require('@/assets/images/zhuroubaicai.jpg'),title:'猪肉白菜',price:25},
                                {img:require('@/assets/images/guzhou.jpg'),title:'鲜蔬菌菇粥',price:35}
                            ]
                        }
                    ]
                }else if(index == 3){
                    that.list = [
                        {CategoryTitle:"特色菜",CategoryList:[
                                {img:require('@/assets/images/zhuroubaicai.jpg'),title:'猪肉白菜2',price:25},
                                {img:require('@/assets/images/guzhou.jpg'),title:'鲜蔬菌菇粥2',price:35},
                                {img:require('@/assets/images/7.jpg'),title:'香酥黄金鱼2',price:30},
                                {img:require('@/assets/images/1.jpg'),title:'玉米粥2',price:12},
                                {img:require('@/assets/images/6.jpg'),title:'娃娃菜炖豆腐2',price:20},
                            ]
                        }
                    ]
                }else if(index == 4){
                    that.list = [
                        {CategoryTitle:"诚心小炒",CategoryList:[
                                {img:require('@/assets/images/product.jpg'),title:'鸡杂',price:18},
                                {img:require('@/assets/images/3.jpg'),title:'清炒苦瓜5',price:18},

                            ]
                        }
                    ]
                }else if(index == 5){
                    that.list = [
                        {CategoryTitle:"田园时蔬",CategoryList:[
                                {img:require('@/assets/images/7.jpg'),title:'香酥黄金鱼4',price:30},
                                {img:require('@/assets/images/6.jpg'),title:'娃娃菜炖豆腐4',price:20},
                                {img:require('@/assets/images/zhuroubaicai.jpg'),title:'猪肉白菜4',price:25},
                            ]
                        }
                    ]
                }else if(index == 6){
                    that.list = [
                        {CategoryTitle:"粗粮主食",CategoryList:[
                                {img:require('@/assets/images/3.jpg'),title:'清炒苦瓜5',price:18},
                                {img:require('@/assets/images/zhuroubaicai.jpg'),title:'猪肉白菜5',price:25},
                                {img:require('@/assets/images/guzhou.jpg'),title:'鲜蔬菌菇粥5',price:35},
                                {img:require('@/assets/images/7.jpg'),title:'土豆牛腩5',price:18},
                                {img:require('@/assets/images/6.jpg'),title:'娃娃菜炖豆腐5',price:20},
                                {img:require('@/assets/images/7.jpg'),title:'香酥黄金鱼5',price:30},

                            ]
                        }
                    ]
                }
            }
        },
        mounted(){
            let that = this
            that.change(0);
            that.getSideList();
        },
    }

</script>
<style scoped>
    header{
        width: 100%;
        position: fixed;
        z-index:1;
    }
    .listBox{
        position: absolute;
        top:5.9rem;
        width: 100%;
    }
    .menuListBox{
        margin-top: .6rem;
    }
    .heard_list{
        overflow: auto;
        width: 100%;
        margin: 0 auto;
        background: #fff;

    }
    .heard_list li{
        display: block;
        float:left;
        width: 32%;
        height: 4.8rem;
        border-right:1px solid #eee;
    }
    .heard_list li:last-child{
        border-right:none;
    }
    .heard_list li img{
        display: block;
        width: 2rem;
        height: 2rem;
        margin:.4rem auto .4rem auto;
    }
    /*菜单列表样式*/
    .menu_list,.history,.searchList{
        display: flex;
        flex-wrap: wrap;
        padding: 0px .5rem;
    }
    .menu_list li,.history li,.searchList li{
        width: 30%;
        margin:.5rem  .5rem .8rem .5rem;
        background: #fff;
    }
    .menu_list li img,.history li img,.searchList li img{
        display:block;
        width: 100%;
        height: 8rem;
    }
    .menu_list li a ,.history li a,.searchList li a{
        color: #666;
        text-decoration: none;
    }
    /*侧边栏*/
    .SideButtonBox{
        position:fixed;
        top:50%;
        left:0;
        z-index: 2;
    }
    .SideButton{
        display: inline-block;
        width: 4rem;
        height: 4rem;
        background: rgba(132, 128, 128, 0.9);
        text-align: center;
        border-radius: 0rem 50% 50% 0rem;
        color:#fff;
        /*z-index: 15;*/
    }
    .SideButton img{
        display: block;
        margin-left: .8rem;
        margin-top: .4rem;
        width: 1.8rem;
        height: 1.8rem;
    }
    .SideListBox{
        width: 30%;
        height: 100%;
        z-index: 20;
        background: #eee;
    }
    .SideList li{
        margin-top: 8rem;
    }
    .addclass{
        color : red;
    }

</style>
