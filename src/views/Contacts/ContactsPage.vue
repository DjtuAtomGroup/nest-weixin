<script setup>
import { ref,reactive } from "vue";
import { onMounted } from "vue";
import axios from "axios";
import {ElMessage} from "element-plus";

//value
const from = reactive({
  search: {
    name: '',
  },
  add: {
    name: ''
  }
})
//total
const total = ref()

//table
const table = ref()
//pull data
const pullAll = () => {
  const access = localStorage.getItem('access').toString();
  axios.get('http://localhost:3000/user/pullUsers',{
    headers: {
      Authorization: `Bearer ${access}`,
    }
  }).then((res) => {
    if (res.data.code === 200) {
      table.value = res.data.data;
      total.value = res.data.totalCount * 10;
      ElMessage({
        type: "success",
        message: res.data.message,
      })
    } else {
      ElMessage({
        type: "warning",
        message: res.data.message,
      })
    }
  }).catch((err) => {
    console.log(err)
  })
}
//search one
const searchOne = () => {
  const access = localStorage.getItem('access').toString()
  axios.get(`http://localhost:3000/user/searchOne?name=${from.search.name}`, {
    headers: {
      Authorization: `Bearer ${access}`,
    }
  }).then((res) => {
    if (res.data.code === 200) {
      table.value = res.data
      ElMessage({
        type: "success",
        message: res.data.message,
      })
    } else {
      ElMessage({
        type: "warning",
        message: res.data.message,
      })
    }
  })
}
//om
onMounted(() => {
  pullAll();
})
</script>

<template>
  <div class="w-full h-full relative block overflow-hidden">
    <div class="w-[863px] h-full relative block mx-auto">
      <!-- 顶部功能栏 -->
      <div class="w-full h-[100px] relative block py-4">
        <el-form
            v-model="from"
            label-width="auto"
            :inline="true"
        >
          <el-form-item label="搜索">
            <el-input v-model="from.search.name" clearable prefix-icon="User" placeholder="请输入用户名" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="Search" @click="searchOne">搜索</el-button>
          </el-form-item>
          <el-form-item label="添加">
            <el-input v-model="from.search.name" clearable prefix-icon="User" placeholder="请输入群聊名" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="Plus">添加好友群聊</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 主体表格 -->
      <div class="w-full table-1 relative block">
        <el-table
            highlight-current-row
            :data="table"
        >
          <el-table-column label="id" prop="id" />
          <el-table-column label="头像" prop="headPic">
            <template #default="scope">
              <div style="display: flex; align-items: center">
                <el-avatar :src="scope.row.headPic" shape="square" />
              </div>
            </template>
          </el-table-column>
          <el-table-column label="名称" prop="username" />
          <el-table-column label="昵称" prop="nickName" />
          <el-table-column label="操作">
            <el-button type="text" size="small">聊天</el-button>
            <el-button type="text" size="small">添加</el-button>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页器 -->
      <div class="w-full h-14 relative flex">
        <div class="w-auto h-auto relative ml-auto my-auto">
          <el-pagination layout="prev, pager, next" :total="total" />
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