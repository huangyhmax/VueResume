<template>
  <div>
    <h2>个人信息</h2>
    <el-form :label-position="labelPosition" label-width="80px" :model="profile" class="profile">
      <el-form-item label="姓名">
        <el-input v-model="profile.name"></el-input>
      </el-form-item>
      <el-form-item label="出生年月">
        <el-input v-model="profile.birth"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="profile.age"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props:['labelPosition','profile']
}
</script>


