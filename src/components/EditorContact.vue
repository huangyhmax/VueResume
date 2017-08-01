<template>
  <div>
    <h2>{{title}}</h2>
    <hr>
    <el-form :label-position="labelPosition" label-width="80px" :model="contact" class="profile">
      <el-form-item label="手机号码">
        <el-input v-model="contact.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="contact.email"></el-input>
      </el-form-item>
      <el-form-item label="微信">
        <el-input v-model="contact.webchat"></el-input>
      </el-form-item>
      <el-form-item label="github">
        <el-input v-model="contact.github"></el-input>
      </el-form-item>
      <el-form-item label="住址">
        <el-input v-model="contact.address"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props:['labelPosition','contact','title'],
}
</script>

