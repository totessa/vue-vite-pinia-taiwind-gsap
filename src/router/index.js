import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { updateSeo } from '../utils/seo'

Vue.use(VueRouter)

const siteName = 'Переезд 24'

const routes = [
  { path: '/', name: 'home', component: HomeView, meta: { title: 'Главная', description: 'Грузоперевозки и переезды в любую точку города. Квартирные и офисные переезды, грузчики, транспорт. Работаем с 2010 года. Звоните 8 800 123-45-67.' } },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue'), meta: { title: 'О компании', description: 'Переезд 24 — надёжная компания по грузоперевозкам. Собственный парк транспорта, опытные грузчики, страховка груза.' } },
  { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue'), meta: { title: 'Контакты', description: 'Контакты Переезд 24. Телефон 8 800 123-45-67, email, адрес офиса. Грузоперевозки и переезды.' } },
  { path: '*', name: 'notFound', component: () => import('../views/NotFoundView.vue'), meta: { title: 'Страница не найдена', description: 'Страница не найдена. Переезд 24 — грузоперевозки и переезды.' } },
]

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes,
})

router.beforeEach((to, _, next) => {
  const meta = to.matched[to.matched.length - 1]?.meta || {}
  const title = meta.title ? `${meta.title} | ${siteName}` : siteName
  const description = meta.description || 'Грузоперевозки и переезды. Переезд 24.'
  updateSeo({ title, description, path: to.path })
  next()
})

export default router
