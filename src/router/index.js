import Vue from 'vue'
import VueRouter from 'vue-router'
import '@/assets/common/css/common.css'

//点餐人数页面
import EditPeopleinfo from '@/views/EditPeopleinfo'

//菜单模块
import Home from '@/views/Home'//菜单列表页
import Pcontent from '@/views/Pcontent'//菜单详情页

//购物车模块
import Cart from '@/views/Cart'//购物车列表页
import Order from '@/views/Order'//购物车列表页
import ConfirmOrder from '@/views/ConfirmOrder'//订单确认页
import Success from '@/views/Success'//支付成功页

import OrderDetails from '@/views/OrderDetails'//详情页

Vue.use(VueRouter)

//创建路由实例
export default new VueRouter({
    routes: [
        { path: '/', name: 'EditPeopleinfo', component: EditPeopleinfo },//点餐人数页面
        { path: '/home', name: 'Home', component: Home },//菜单列表页
        { path: '/pcontent', name: 'Pcontent', component: Pcontent },//菜单详情页
        { path: '/cart', name: 'Cart', component: Cart },//购物车
        { path: '/order', name: 'Order', component: Order },//订单列表
        { path: '/confirmOrder', name: 'ConfirmOrder', component: ConfirmOrder },//订单列表
        { path: '/success', name: 'Success', component: Success },//支付成功页
        { path: '/orderDetails', name: 'OrderDetails', component: OrderDetails },//详情页
    ]
})