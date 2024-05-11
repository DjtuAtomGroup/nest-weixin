<script setup>
import SiderBar from "@/components/SideBar/SiderBar.vue";
import { onMounted } from "vue";
import axios from "axios";

//captcha
const captcha = (access) => {
  axios.post(`http://localhost:3000/user/refresh?token=${access}`).then((res) => {
    //刷新 access token
    localStorage.setItem('access',res.data.access);
  }).catch((err) => {
    console.log(err)
  })
}
//refresh
const refresh = () => {
  const access = localStorage.getItem('refresh').toString();
  setInterval(() => {
    captcha(access);
  },30000)
}

//refresh access token per 5min
//om
onMounted(() => {
  refresh()
})
</script>

<template>
  <div class="w-screen h-screen relative flex overflow-hidden">
    <!-- 左侧导航栏 -->
    <div class="w-auto h-full relative block bg-black">
      <SiderBar />
    </div>
    <div class="w-full h-full relative block overflow-hidden">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>