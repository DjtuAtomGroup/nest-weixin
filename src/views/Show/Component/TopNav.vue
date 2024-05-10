<script setup>
import { ref } from "vue";

//nest logo
const nest = ref('https://nestjs.com/img/logo-small.svg')

//github
const jumpToGit = () => {
  window.location.href = 'https://github.com/FluffyChi-Xing/nest-weixin.git'
}
</script>

<template>
  <div class="w-full h-14 px-6 absolute top-0 left-0 flex z-[499]">
    <!-- 左侧 -->
    <div class="w-full h-full relative flex">
      <RouterLink to="/" class="w-auto h-auto relative flex">
        <!-- 左侧logo -->
        <div class="w-auto h-full cursor-pointer relative flex leading-[56px] text-center">
          <div class="w-8 h-8 relative block my-auto">
            <img :src="nest" alt="nest" class="w-full h-full relative block object-contain">
          </div>
        </div>
        <!-- 项目名称 -->
        <div class="w-auto h-full leading-[56px] relative block text-black font-bold px-3 text-[16px]">
          Nest 聊天室
        </div>
      </RouterLink>
    </div>
    <!-- 右侧 -->
    <div class="w-[240px] h-full relative flex">
      <!-- 夜间模式 -->
      <div></div>
      <!-- github -->
      <div @click="jumpToGit" class="w-8 h-8 relative block overflow-hidden my-auto ml-auto cursor-pointer">
        <img src="../../../assets/image/github.png" alt="github" class="w-full h-full relative block object-contain">
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>