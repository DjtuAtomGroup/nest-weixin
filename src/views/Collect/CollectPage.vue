<script setup>
import { ref } from "vue";

//all
const all = ref([
  {
    id: 1,
    name: 'xxsnx.jpg',
    type: 'jpg',
    isImg: true,
    img: 'https://picsum.photos/200/300?4',
    time: new Date(),
  },
  {
    id: 2,
    name: 'xxsnx.jpg',
    type: 'jpg',
    isImg: true,
    img: 'https://picsum.photos/200/300?5',
    time: new Date(),
  },
  {
    id: 3,
    name: 'xxsnx.jpg',
    type: 'jpg',
    isImg: true,
    img: 'https://picsum.photos/200/300?6',
    time: new Date(),
  },
  {
    id: 4,
    name: 'xxsnx.jpg',
    type: 'pdf',
    isImg: false,
    img: '',
    time: new Date(),
  }
])
</script>

<template>
  <div class="w-full h-full relative block overflow-hidden">
    <el-tabs type="border-card">
      <el-tab-pane label="全部">
        <el-table
            :data="all"
            highlight-current-row
        >
          <el-table-column prop="id" label="id" />
          <el-table-column prop="name" label="名称" />
          <el-table-column prop="type" label="文件类型" />
          <el-table-column prop="isImg" label="是否图片" />
          <el-table-column prop="img" label="图片">
            <template #default="scope">
              <el-avatar shape="square" :src="scope.row.img" />
            </template>
          </el-table-column>
          <el-table-column prop="time" label="时间" />
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="文字">Config</el-tab-pane>
      <el-tab-pane label="图片">Role</el-tab-pane>
      <el-tab-pane label="文件">Task</el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped>

</style>