import Vue from 'vue';
import Router from 'vue-router';
import Signin from './components/Signin.vue';
import Signup from './components/Signup.vue';
import Signout from './components/Signout.vue';
import Mypage from './components/Mypage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', component: Signin},
    {path: '/Signup', component: Signup},
    {path: '/Signout', component: Signout},
    {path: '/Mypage', component: Mypage},
  ]
})