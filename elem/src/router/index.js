import Vue from 'vue';
import Router from 'vue-router';
// import App from '@/App';
import Goods from '../components/goods/goods.vue';
import Ratings from '../components/ratings/ratings.vue';
import Seller from '../components/seller/seller.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      redirect: '/goods' // 使用重定向直接将首页定向展示商品页
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    }
  ]
});
