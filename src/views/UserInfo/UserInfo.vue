<script setup>
import { reactive } from "vue";

//user info form
const infoForm = reactive({
  avatar: '',
  username: '',
  password: '',
  nickName: '',
  email: '',
  code: '',
})
</script>

<template>
  <div class="w-full h-full relative block overflow-hidden">
    <div class="w-[863px] h-full relative block mx-auto py-4">
      <el-alert type="warning" title="如有任何问题请联系管理员" show-icon closable />
      <div class="w-full more block overflow-hidden pt-14">
        <el-form
            v-model="infoForm"
            label-width="auto"
        >
          <el-form-item>
            <el-avatar class="mx-auto" :src="infoForm.avatar" shape="square" />
          </el-form-item>
          <el-form-item label="用户名">
            <el-input v-model="infoForm.username" disabled />
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="infoForm.password" disabled />
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model="infoForm.nickName" placeholder="请输入昵称" clearable />
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="infoForm.email" clearable placeholder="请输入邮箱"/>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="infoForm.code" placeholder="请输入验证码" maxlength="6" clearable show-word-limit />
            <el-button type="primary" class="mt-4">发送验证码</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="w-full">保存修改</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.more {
  height: calc(100% - 60px);
}
</style>