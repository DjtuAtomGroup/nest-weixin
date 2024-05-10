<script setup>
import { useRouter } from "vue-router";
import { reactive } from "vue";
import {ElMessage} from "element-plus";
import {Lock, User} from "@element-plus/icons-vue";

//router
const router = useRouter()
//login
const loginForm = reactive({
  username: '',
  password: ''
})
//login
const loginSubmit = () => {
 if (loginForm.username && loginForm.password) {
   router.push('/layout')
   ElMessage({
     type: "success",
     message: '登陆成功'
   })
 } else {
   ElMessage({
     type: "warning",
     message: '用户名或密码错误',
   })
 }
}
//register form
const registerForm = reactive({
  username: '',
  nickName: '',
  password: '',
  againPass: '',
  email: '',
  code: '',
})
</script>

<template>
  <div class="w-screen h-screen relative flex bg-image overflow-hidden">
    <!-- 登录卡片 -->
    <el-card class="w-[450px] h-auto relative block mx-auto my-auto">
      <template #header>
        <span class="font-bold">登录中心</span>
      </template>
      <div class="w-full h-auto relative block bg-red-950">
        <el-tabs
            type="border-card"
        >
          <el-tab-pane label="登录">
            <el-form
                v-model="loginForm"
                :inline="true"
                label-width="auto"
            >
              <el-form-item label="用户名">
                <el-input v-model="loginForm.username" clearable placeholder="请输入用户名" :prefix-icon="User" />
              </el-form-item>
              <el-form-item label="密码">
                <el-input type="password" clearable show-password v-model="loginForm.password" placeholder="请输入密码" :prefix-icon="Lock" />
              </el-form-item>
              <el-form-item>
                <el-button @click="loginSubmit" type="primary" round>登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="注册">
            <el-form
                v-model="registerForm"
                :inline="true"
                label-width="auto"
            >
              <el-form-item label="用户名">
                <el-input v-model="registerForm.username" placeholder="请输入用户名" clearable />
              </el-form-item>
              <el-form-item label="昵称">
                <el-input v-model="registerForm.nickName" clearable placeholder="请输入昵称" />
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="registerForm.password" clearable show-password type="password" placeholder="请输入密码" />
              </el-form-item>
              <el-form-item label="再次输入密码">
                <el-input v-model="registerForm.againPass" clearable show-password type="password" placeholder="请再次输入密码" />
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="registerForm.email" clearable placeholder="请输入邮箱" />
              </el-form-item>
              <el-form-item label="验证码">
                <el-input v-model="registerForm.code" placeholder="请输入验证码" clearable />
                <el-button type="primary" class="mt-4">发送验证码</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="w-[380px]">注册</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
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