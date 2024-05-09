<script setup>
import TopNav from "@/views/Show/Component/TopNav.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import {ElMessage} from "element-plus";
import {ElementPlus} from "@element-plus/icons-vue";

//nest logo
const nest = ref('https://nestjs.com/img/logo-small.svg')
//router
const router = useRouter()
//quick start
const start = () => {
  router.push('/login')
  ElMessage({
    type: "success",
    message: '快速开始'
  })
}
</script>

<template>
  <div class="w-screen h-screen overflow-hidden block relative">
    <!-- 顶部导航栏 -->
    <TopNav />
    <!-- 主体部分 -->
    <div class="w-2/3 h-full relative block mx-auto pt-14">
      <div class="w-full h-full relative block">
        <!-- 快速开始 -->
        <div class="w-full h-1/2 relative block">
          <div class="w-full lose relative flex">
            <div class="w-1/2 h-full relative block text-[56px] text-ellipsis overflow-hidden whitespace-pre-line leading-[56px]">
              <div class="w-full h-1/2 relative flex title font-bold">Nest 聊天系统</div>
              <div class="w-full h-1/2 relative flex font-bold text-[#3c3c43]">
                项目源自掘金
              </div>
            </div>
            <div class="w-1/2 h-full relative block">
              <div class="w-full h-full relative block img-bg"></div>
              <div class="w-[300px] h-[300px] absolute top-0 left-[112px] my-auto block">
                <img :src="nest" alt="nest" class="w-full h-full relative block object-cover">
              </div>
            </div>
          </div>
          <div class="w-full h-14 relative flex overflow-hidden">
            <div class="w-auto h-full relative flex px-3">
              <el-button @click="start" round size="large" class="w-full start border-0 outline-none my-auto relative block">Quick Start</el-button>
            </div>
          </div>
        </div>
        <!-- 项目亮点 -->
        <div class="w-full h-1/2 relative grid grid-cols-3 gap-3">
          <!-- 1 -->
          <div class="w-full h-[200px] cursor-pointer p-4 hover:shadow-lg relative grid grid-rows-3 gap-2 rounded-md overflow-hidden bg-[#F5F5F5FF]">
            <!-- nest logo -->
            <div class="w-full h-full relative flex">
              <div class="w-10 h-10 relative block bg-[#8e96aa24] my-auto rounded-md overflow-hidden">
                <img :src="nest" alt="nest" class="w-full h-full relative block object-cover">
              </div>
            </div>
            <!-- title -->
            <div class="w-full h-full relative block text-left font-bold leading-10">
              后端基于Nest实现
            </div>
            <!-- description -->
            <div class="w-full h-full relative block text-left font-thin">
              这是一个基于nest的会议室预约项目
            </div>
          </div>
          <!-- 2 -->
          <div class="w-full h-[200px] cursor-pointer p-4 hover:shadow-lg relative grid grid-rows-3 gap-2 rounded-md overflow-hidden bg-[#F5F5F5FF]">
            <!-- element logo -->
            <div class="w-full h-full relative block">
              <div class="w-10 h-10 relative block bg-[#8e96aa24] rounded-md overflow-hidden">
                <el-icon style="width: 100%;height: 100%;color: #409eff">
                  <ElementPlus style="width: 40px;height: 40px" />
                </el-icon>
              </div>
            </div>
            <!-- title -->
            <div class="w-full h-full relative block text-left font-bold leading-10">
              Element Plus
            </div>
            <!-- description -->
            <div class="w-full h-full relative block text-left font-thin">
              用户界面使用Element-Plus构建
            </div>
          </div>
          <!-- 3 -->
          <div class="w-full h-[200px] cursor-pointer p-4 hover:shadow-lg relative grid grid-rows-3 gap-2 rounded-md overflow-hidden bg-[#F5F5F5FF]">
            <!-- Vue logo -->
            <div class="w-full h-full relative block">
              <div class="w-10 h-10 relative flex justify-center py-[5px] bg-[#8e96aa24] rounded-md overflow-hidden">
                <img src="../../assets/logo.svg" alt="nest" style="width: 30px;height: 30px" class="relative block">
              </div>
            </div>
            <!-- title -->
            <div class="w-full h-full relative block text-left font-bold leading-10">
              前端基于Vue 3.0 框架
            </div>
            <!-- description -->
            <div class="w-full h-full relative block text-left font-thin">
              本项目使用Vue 3.0 框架作为基础
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lose {
  height: calc(100% - 56px);
}
.start {
  background-color: #E0234E;
  color: white;
}
.title {
  background: -webkit-linear-gradient(120deg, #35495e -80%, #E0234E);
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.img-bg {
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #E0234E 30%, #35495e80);
  --vp-home-hero-image-filter: blur(72px);
  background-image: var(--vp-home-hero-image-background-image);
  filter: var(--vp-home-hero-image-filter);
}
</style>