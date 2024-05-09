<script setup>
import TopFunction from "@/components/GroupList/Component/TopFunction.vue";
import ListItem from "@/components/GroupList/Component/ListItem.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCounterStore } from "@/stores/counter.js";

//store
const store = useCounterStore()
//router
const router = useRouter()
//items
const items = ref([
  {
    img: 'https://picsum.photos/200/300?5',
    groupName: '神说要有光',
    info: '[图片]',
    time: '昨天',
    id: 1,
  },
  {
    img: 'https://picsum.photos/200/300?6',
    groupName: 'xxx交流群',
    info: '[图片]',
    time: '昨天',
    id: 2,
  }
])
//chat
const chat = (name) => {
  router.push('/box');
  store.currentChat = name;
}
</script>

<template>
  <div class="w-full h-full relative block pt-4">
    <!-- 顶部功能栏 -->
    <TopFunction />
    <!-- 列表主体 -->
    <div class="w-full more relative block mt-4 bg-[#E6E8EB] overflow-y-scroll">
      <div class="w-full h-full relative block">
        <ListItem @click="chat(item.groupName)" v-for="item in items" :items="item" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.more {
  height: calc(100% - 56px);
}
</style>