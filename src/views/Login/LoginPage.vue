<script setup>
import { useRouter } from "vue-router";
import {ElMessage} from "element-plus";

//router
const router = useRouter()
//login
const loginSubmit = () => {
  router.push('/layout')
  ElMessage({
    type: "success",
    message: '登陆成功'
  })
}
</script>

<template>
  <div class="w-screen h-screen relative flex bg-image overflow-hidden">
    <!-- 登录卡片 -->
    <el-card class="w-[450px] h-[400px] relative block mx-auto my-auto">
      <template #header>
        <span class="font-bold">登录中心</span>
      </template>
      <div class="w-full h-[300px] relative block bg-red-950">
        <el-button @click="loginSubmit" type="primary" round>登录</el-button>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.bg-image {
  background-image: url("../../assets/image/background.png");
  background-size: cover;
}
</style>