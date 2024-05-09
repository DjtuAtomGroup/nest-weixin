import {createRouter, createWebHashHistory} from 'vue-router'
import DisplayPage from "@/views/Show/DisplayPage.vue";
import NProgress from 'nprogress'
import LoginPage from "@/views/Login/LoginPage.vue";
import LayoutPage from "@/views/Layout/LayoutPage.vue";
import EmptyPage from "@/views/Empty/EmptyPage.vue";
import UserInfo from "@/views/UserInfo/UserInfo.vue";
import ChatPage from "@/views/Chat/ChatPage.vue";
import ContactsPage from "@/views/Contacts/ContactsPage.vue";
import ChatBox from "@/views/ChatBox/ChatBox.vue";
import CollectPage from "@/views/Collect/CollectPage.vue";
import NoticePage from "@/views/Notice/NoticePage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'display',
      component: DisplayPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/layout',
      name: 'layout',
      component: LayoutPage,
      children: [
        {
          path: '',
          name: 'contacts',
          component: ContactsPage,
        },
        {
          path: '/collect',
          name: 'collect',
          component: CollectPage
        },
        {
          path: '/notice',
          name: 'notice',
          component: NoticePage,
        },
        {
          path: '/chat',
          name: 'chat',
          component: ChatPage,
          children: [
            {
              path: '',
              name: 'empty',
              component: EmptyPage,
            },
            {
              path: '/box',
              name: 'box',
              component: ChatBox
            },
            {
              path: '/user',
              name: 'user',
              component: UserInfo,
            },
          ],
        },
      ]
    }
  ]
})
router.beforeEach( async () => {
  NProgress.start();
})
router.afterEach(async () => {
  NProgress.done();
})
export default router
