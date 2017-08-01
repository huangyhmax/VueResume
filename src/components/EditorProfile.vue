<template>
  <div>
    <h2>{{title}}</h2>
    <hr>
    <el-form :label-position="labelPosition" label-width="80px" :model="profile" class="profile">
      <el-form-item label="姓名">
        <el-input v-model="profile.name"></el-input>
      </el-form-item>
      <el-form-item label="所在城市">
        <el-input v-model="profile.city"></el-input>
      </el-form-item>
      <el-form-item label="出生年月">
        <!--<el-input v-model="profile.birth"></el-input>-->
        <div class="block">
          <span class="demonstration"></span>
          <el-date-picker
            v-model="profile.birth"
            format="yyyy-MM-dd"
            placeholder="选择日期范围">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="应聘岗位">
        <el-input v-model="profile.work"></el-input>
      </el-form-item>
      <!--<el-form-item label="年龄">
        <el-input v-model="profile.age"></el-input>
      </el-form-item>-->
    </el-form>
  </div>
</template>

<script>
export default {
  props:['labelPosition','profile','title'],
}
</script>


