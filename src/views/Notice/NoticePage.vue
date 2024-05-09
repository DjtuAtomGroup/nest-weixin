<script setup>
import { ref } from "vue";

//table
const table = ref([
  {
    id: 1,
    name: 'xx请求添加你',
    description: '原因xxxxx',
    time: new Date(),
  },
  {
    id: 2,
    name: 'xx请求添加你',
    description: '原因xxxxx',
    time: new Date(),
  },
  {
    id: 3,
    name: 'xx请求添加你',
    description: '原因xxxxx',
    time: new Date(),
  },
  {
    id: 4,
    name: 'xx请求添加你',
    description: '原因xxxxx',
    time: new Date(),
  }
])
//form
const form = ref()
</script>

<template>
  <div class="w-full h-full relative block overflow-hidden">
    <div class="w-[863px] h-full relative block mx-auto">
      <!-- 顶部功能栏 -->
      <div class="w-full h-[100px] relative flex justify-center p-4">
        <el-form
            v-model="form"
            label-width="auto"
            :inline="true"
            class="my-auto"
        >
          <el-form-item label="事件名称">
            <el-input v-model="form" clearable placeholder="搜索..." />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 主体表格 -->
      <div class="w-full notice relative block">
        <el-table
            :data="table"
            highlight-current-row
        >
          <el-table-column prop="id" label="id" />
          <el-table-column prop="name" label="事件名" />
          <el-table-column prop="description" label="详细信息" />
          <el-table-column prop="time" label="接收时间" />
          <el-table-column label="操作">
            <el-button type="text" size="small">通过</el-button>
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
.notice {
  height: calc(100% - 156px);
}
</style>