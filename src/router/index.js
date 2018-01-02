import Vue from 'vue'
import Router from 'vue-router'
import SamveraEditor from '@/components/SamveraEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SamveraEditor',
      component: SamveraEditor
    }
  ]
})
