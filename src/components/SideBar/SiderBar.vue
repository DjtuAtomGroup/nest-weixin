<script setup>
import {ChatRound, Files, Notification, User, UserFilled} from "@element-plus/icons-vue";
import { ref } from "vue";
import { watch } from "vue";
import { onMounted } from "vue";
import { useCounterStore } from "@/stores/counter.js";
import router from "@/router/index.js";
import {ElMessage} from "element-plus";
import { useRoute } from "vue-router";
//default active
const defaultActive = ref()
//store
const store = useCounterStore()
//route
const route = useRoute()
//current route
const currentRoute = ref()
//check current route
const checkRoute = () => {
  currentRoute.value = route.matched;
  for (let i = 0;i < currentRoute.value.length;i ++) {
    switch (currentRoute.value[i].name) {
      case 'contacts' :
        defaultActive.value = '1'
            break;
      case 'chat' :
        defaultActive.value = '2'
            break;
      case 'collect' :
        defaultActive.value = '3'
            break;
      case 'notice' :
        defaultActive.value = '4'
            break;
      case 'userInfo' :
        defaultActive.value = '5'
            break;
    }
  }
}
//jump function
const jumpToMin = () => {
  router.push('/layout')
  ElMessage({
    type: "success",
    message: '通讯录',
  })
}
const jumpToChat = () => {
  router.push('/chat')
  ElMessage({
    type: "success",
    message: '聊天'
  })
}
const jumpToCol = () => {
  router.push('/collect')
  ElMessage({
    type: "success",
    message: '收藏',
  })
}
const jumpToNot = () => {
  router.push('/notice')
  ElMessage({
    type: "success",
    message: '通知',
  })
}
const jumpToUser = () => {
  router.push('/userInfo')
  ElMessage({
    type: "success",
    message: '个人信息',
  })
}
//om
onMounted(() => {
  checkRoute()
})
//watch
watch(() => route.fullPath,() => {
  currentRoute.value = null;
  checkRoute()
})
</script>

<template>
  <div class="w-auto h-full relative block">
    <el-menu
        :default-active="defaultActive"
        class="el-menu-vertical-demo pt-3 border-0"
        style="height: 100%"
        background-color="#303133"
        text-color="#fff"
        active-text-color="#67C23A"
        :collapse="store.collapse"
    >
      <el-menu-item index="5" @click="jumpToUser">
        <div class="w-10 h-10 relative flex mx-auto my-auto">
          <el-avatar
              :icon="UserFilled"
              shape="square"
          />
        </div>
      </el-menu-item>
      <el-menu-item index="1" @click="jumpToMin">
        <el-icon><User /></el-icon>
        <span>通讯录</span>
      </el-menu-item>
      <el-menu-item index="2" @click="jumpToChat">
        <el-icon><ChatRound /></el-icon>
        <span>聊天</span>
      </el-menu-item>
      <el-menu-item index="3" @click="jumpToCol">
        <el-icon><Files /></el-icon>
        <span>收藏</span>
      </el-menu-item>
      <el-menu-item index="4" @click="jumpToNot">
        <el-icon><Notification /></el-icon>
        <span>通知</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 400px;
}
</style>