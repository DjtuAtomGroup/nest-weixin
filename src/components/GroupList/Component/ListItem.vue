<script setup>
//传入参数
const props = defineProps({
  items: {
    img: '',
    groupName: '',
    info: '',
    time: '',
    id: 1,
  }
})
</script>

<template>
  <!-- 单个列表项 -->
  <div class="w-full h-[100px] relative flex p-4 hover:bg-[#CDD0D6] cursor-pointer">
    <!-- 群聊头像 -->
    <div class="w-[90px] h-full relative flex">
      <el-avatar :fit="fill" :src="props.items.img" shape="square" class="w-[56px] h-[56px] relative block mx-auto my-auto" />
    </div>
    <!-- 群聊名称等 -->
    <div class="card h-full relative block">
      <div class="w-full h-1/2 relative block leading-[34px] text-left text-ellipsis overflow-hidden whitespace-nowrap text-black font-bold text-[15px]">{{ props.items.groupName }}</div>
      <div class="w-full h-1/2 relative block leading-[34px] text-left text-ellipsis overflow-hidden whitespace-nowrap text-[#909399]">
        {{ props.items.info }}
      </div>
    </div>
    <!-- 时间戳 -->
    <div class="w-[90px] h-full relative block">
      <div class="w-full h-1/2 relative text-center text-ellipsis overflow-hidden whitespace-nowrap text-[#909399] leading-[34px] ">
        {{ props.items.time }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: calc(100% - 180px);
}
</style>