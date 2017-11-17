import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
import log from '@/components/log'
import login from '@/components/login'
// import age from '@/components/age'

Vue.use(Router)

// const UserHome = { template: '<div>Home</div>' }
// const UserProfile = { template: '<div>Profile</div>' }
// const UserPosts = { template: '<div>Posts</div>' }

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/log/',
      component: log
    },
    {
      path: '/login/',
      component: login
    },
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/demo/:id',
      name: 'demo',
      props: true,
      component: demo
      // children: [{ path: '', component: UserHome }, {
      //   path: 'age/:num',
      //   component: age
      // }, { path: 'profile', component: UserProfile }]
    }
  ]
})
