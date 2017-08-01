<template>
  <div>
    <!--<h2 v-bind:title="title"></h2>-->
    <h2>{{title}}</h2>
    <!--{{keys}}-->
      <el-form>
        <div class="workblock" v-for="(item,index) in items" :key="item.id" >
          <hr>
          <!--<el-button type="primary" icon="delete" v-on:click="removeWordexperience(index)" class="delete"></el-button>-->
          <i class="el-icon-delete" v-on:click="removeItem(index)"></i>
          <el-form-item v-for="key in keys" v-bind:key="key.id" v-bind:label="label[key] || key">
            <el-input v-model="item[key]"></el-input>
          </el-form-item>
          <!--<el-form-item label="工作内容">
            <el-input v-model="item.experience"></el-input>
          </el-form-item>
          <el-form-item label="历时">
            <el-input v-model="item.time"></el-input>
          </el-form-item>-->
          <el-button type="primary" v-on:click="addItem()">添加</el-button>
        </div>
      </el-form>
  </div>
</template>

<script>
export default {
  props:['items','label','title'],
  computed:{
    keys(){
      return Object.keys(this.items[0])
      // Object.arguments
    }
  },
  methods:{
    addItem(){
      const empty={}
      this.keys.map((key)=>{
        empty[key]=''
      })
      this.items.push(empty)
      // this.items.push({company:'',experience:'',time:'',xxx:''})
    },
    removeItem(index){
      this.items.splice(index,1)
    }
  }
}
</script>

<stylelang="scss">
  /*h2{
    letter-spacing: 8px;
    color: #44536A;
    margin-bottom: 8px;
  }*/
</style>

