<script setup>
import GroupList from "@/components/GroupList/GroupList.vue";
</script>

<template>
  <div class="w-full h-full relative flex">
    <!-- 群聊列表 -->
    <div class="w-[480px] h-full relative box-border division block">
      <GroupList />
    </div>
    <!-- router view -->
    <div class="box h-full relative block">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.box {
  width: calc(100% - 480px);
}
.division {
  border-right: 2px solid #F0F2F5;
}
</style>