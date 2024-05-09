<script setup>
import { useCounterStore } from "@/stores/counter.js";
import { ref } from "vue";
import {Expand, Fold} from "@element-plus/icons-vue";
import {ElMessage} from "element-plus";
//store
const store = useCounterStore()
//icon
const icon = ref(Fold)
const isCollapse = () => {
  store.collapse = !store.collapse;
  if (store.collapse === false) {
    icon.value = Fold
  } else {
    icon.value = Expand
  }
}
//search
const search = ref()
//search submit
const searchSubmit = () => {
  if (!search.value) {
    ElMessage({
      type: "warning",
      message: '搜索内容不可为空',
    })
  }
}
</script>

<template>
  <div class="w-full h-10 relative flex bg-white px-4">
    <div class="h-full relative block w-10">
      <el-button @click="isCollapse" :icon="icon" class="w-full h-full relative block border-0 outline-none" />
    </div>
    <div class="h-full relative block more px-3">
      <el-input v-model="search" placeholder="搜索..." clearable class="h-full" />
    </div>
    <div class="h-full relative block w-10">
      <el-button @click="searchSubmit" icon="Search" class="w-full h-full relative block border-0 outline-none" />
    </div>
  </div>
</template>

<style scoped>
.more {
  width: calc(100% - 80px);
}
</style>