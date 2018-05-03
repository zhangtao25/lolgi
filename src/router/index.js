import Vue from 'vue'
import Router from 'vue-router'

import hero from '../components/hero'
import goods from '../components/goods'
import summonerSkill from '../components/summonerSkill'
import fuwen from '../components/fuwen'
import heroDetails from '../components/heroDetails'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect:'/hero'
    },
    {
      path: '/hero',
      name: 'hero',
      component: hero,
      children:[
        {
          path:'heroDetails',
          name:'heroDetails',
          component:heroDetails
        }
      ]
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/summonerSkill',
      name: 'summonerSkill',
      component: summonerSkill
    },
    {
      path: '/fuwen',
      name: 'fuwen',
      component: fuwen
    }
  ]
});

import checkpath from '../common/checkpath'
router.beforeEach((to, from, next)=>{
  checkpath.checkpathHeros(to);
  checkpath.checkpathPadding(to);
  next();
});

export default router
