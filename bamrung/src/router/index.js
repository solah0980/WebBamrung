import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Activity from '../views/Activity'
import ActivitySub from '../views/ActivitySub'
import SubjectView from '../views/Subject.vue'
import AdminDashboard from '../views/admin/adminDashboard'
import AdminLogin from '../views/admin/adminLogin'
import SubjectEdit from '../views/admin/subject/Edit.vue'
import Subject from '../views/admin/subject/index'
import TeacherEdit from '../views/admin/teacher/Edit'
import Teacher from '../views/admin/teacher/index'
import TeacherCreate from '../views/admin/teacher/Create'
import ActivityViews from '../views/admin/activity/index'
import ActivityCreate from '../views/admin/activity/create'
import ActivityEdit from '../views/admin/activity/edit'
import NewsCreate from '../views/admin/news/create'
import EditNews from '../views/admin/news/edit'
import News from '../views/admin/news/index'
import NewsShow from '../views/NewsSub'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/activity',
    name: 'Activity',
    component: Activity
  },
  {
    path: '/activity/view/:id',
    name: 'ActivitySub',
    component: ActivitySub
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/admin/dashboard',
    name: 'AdminDashboard',
    component: AdminDashboard
  },
  {
    path: '/admin/subject',
    name: 'Subject',
    component: Subject
  },
  {
    path: '/admin/subject/edit/:id',
    name: 'SubjectEdit',
    component: SubjectEdit
  },
  {
    path: '/admin/teacher',
    name: 'Teacher',
    component: Teacher
  },
  {
    path: '/admin/teacher/edit/:id',
    name: 'TeacherEdit',
    component: TeacherEdit
  },
  {
    path: '/admin/teacher/create',
    name: 'TeacherCreate',
    component: TeacherCreate
  },
  {
    path: '/subject/view/',
    name: 'SubjectView',
    component: SubjectView
  },{
    path: '/admin/activity',
    name: 'ActivityViews',
    component: ActivityViews
  },
  {
    path: '/admin/activity/create',
    name: 'ActivityCreate',
    component: ActivityCreate
  },
  {
    path: '/admin/activity/edit/:id',
    name: 'ActivityEdit',
    component: ActivityEdit
  },
  {
    path: '/admin/news/create',
    name: 'NewsCreate',
    component: NewsCreate
  },
  {
    path: '/admin/news/edit/:id',
    name: 'EditNews',
    component: EditNews
  },
  {
    path: '/admin/news',
    name: 'News',
    component: News
  },
  {
    path: '/news/show/:id',
    name: 'NewsShow',
    component: NewsShow
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
