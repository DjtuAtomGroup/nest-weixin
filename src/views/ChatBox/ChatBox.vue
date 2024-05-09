<script setup>
import { useCounterStore } from "@/stores/counter.js";
import { ref } from "vue";

//store
const store = useCounterStore()
//message
const message = ref()
</script>

<template>
  <div class="w-full h-full relative block bg-[#F5F7FA]">
    <!-- 顶部名称 -->
    <div class="w-full box-border top-border h-[73px] text-[20px] text-black text-ellipsis overflow-hidden whitespace-nowrap relative block text-left px-4 leading-[73px]">
      {{ store.currentChat }}
    </div>
    <!-- 聊天区 -->
    <div class="w-full area relative grid grid-cols-2 gap-3 overflow-y-scroll">

    </div>
    <!-- 聊天区 -->
    <div class="w-full h-[150px] relative block bot-border p-4">
      <div class="w-full h-1/2 relative flex">
        <textarea v-model="message" class="resize-none w-full h-full" placeholder="输入..." />
      </div>
      <div class="w-full h-1/2 relative flex">
        <el-button type="success" class="ml-auto my-auto">发送</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.top-border {
  border-bottom: 1px solid #DCDFE6;
}
.bot-border {
  border-top: 1px solid #DCDFE6;
}
.area {
  height: calc(100% - 223px);
}
</style>