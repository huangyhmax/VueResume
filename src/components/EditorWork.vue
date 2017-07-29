<template>
  <div>
    <h2>工作经历</h2>
      <el-form>
        <div class="workblock" v-for="(item,index) in wordexperience" :key="item.id" >
          <hr>
          <!--<el-button type="primary" icon="delete" v-on:click="removeWordexperience(index)" class="delete"></el-button>-->
          <i class="el-icon-delete" v-on:click="removeWordexperience(index)"></i>
          <el-form-item label="公司">
            <el-input v-model="item.company"></el-input>
          </el-form-item>
          <el-form-item label="工作内容">
            <el-input v-model="item.experience"></el-input>
          </el-form-item>
          <el-form-item label="历时">
            <el-input v-model="item.time"></el-input>
          </el-form-item>
          <el-button type="primary" v-on:click="addWordexperience()">添加</el-button>
        </div>
      </el-form>
  </div>
</template>

<script>
export default {
  props:['wordexperience'],
  methods:{
    addWordexperience(){
      this.wordexperience.push({
        company:'',experience:'',time:''
      })
    },
    removeWordexperience(index){
      this.wordexperience.splice(index,1)
    }
  }
}
</script>

