<script setup>
import SiderBar from "@/components/SideBar/SiderBar.vue";
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