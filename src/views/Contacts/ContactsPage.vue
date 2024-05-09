<script setup>
import { ref } from "vue";

//value
const value = ref()
//table
const table = ref([
  {
    id: 1,
    img: 'https://picsum.photos/200/300?1',
    name: '张三',
  },
  {
    id: 2,
    img: 'https://picsum.photos/200/300?2',
    name: '李四',
  },
  {
    id: 3,
    img: 'https://picsum.photos/200/300?3',
    name: '小明',
  },
  {
    id: 4,
    img: 'https://picsum.photos/200/300?4',
    name: '小红',
  }
])
</script>

<template>
  <div class="w-full h-full relative block overflow-hidden">
    <div class="w-[863px] h-full relative block mx-auto">
      <!-- 顶部功能栏 -->
      <div class="w-full h-[100px] relative grid grid-cols-4 gap-3">
        <div class="w-full h-full relative block text-center font-bold text-black leading-[100px]">
          名称
        </div>
        <div class="w-full h-full relative flex">
          <el-input v-model="value" clearable placeholder="搜索..." class="h-8 my-auto"/>
        </div>
        <div class="w-full h-full relative flex justify-center">
          <el-button type="primary" icon="Plus" class="my-auto">搜索</el-button>
        </div>
        <div class="w-full h-full relative flex">
          <el-button type="primary" icon="Plus" class="my-auto">添加好友/群聊</el-button>
        </div>
      </div>
      <!-- 主体表格 -->
      <div class="w-full table-1 relative block">
        <el-table
            highlight-current-row
            :data="table"
        >
          <el-table-column label="id" prop="id" />
          <el-table-column label="头像" prop="img">
            <template #default="scope">
              <div style="display: flex; align-items: center">
                <el-avatar :src="scope.row.img" shape="square" />
              </div>
            </template>
          </el-table-column>
          <el-table-column label="名称" prop="name" />
          <el-table-column label="操作">
            <el-button type="text" size="small">聊天</el-button>
            <el-button type="text" size="small">添加</el-button>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页器 -->
      <div class="w-full h-14 relative flex">
        <div class="w-auto h-auto relative ml-auto my-auto">
          <el-pagination layout="prev, pager, next" :total="50" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.table-1 {
  height: calc(100% - 156px);
}
</style>