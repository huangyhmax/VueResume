<template>
  <div>
    <h2>教育经历</h2>
      <el-form>
        <div class="workblock" v-for="(item,index) in items" :key="item.id" >
          <hr>
          <!--<el-button type="primary" icon="delete" v-on:click="removeWordexperience(index)" class="delete"></el-button>-->
          <i class="el-icon-delete" v-on:click="removeItem(index)"></i>
          <el-form-item label="学校">
            <el-input v-model="item.school"></el-input>
          </el-form-item>
          <el-form-item label="时间">
            <el-input v-model="item.timeline"></el-input>
          </el-form-item>
          <el-form-item label="学位">
            <el-input v-model="item.degree"></el-input>
          </el-form-item>
          <el-button type="primary" v-on:click="addItem()">添加</el-button>
        </div>
      </el-form>
  </div>
</template>

<script>
export default {
  props:['items'],
  methods:{
    addItem(){
      this.items.push({
        company:'',experience:'',time:''
      })
    },
    removeItem(index){
      this.items.splice(index,1)
    }
  }
}
</script>

