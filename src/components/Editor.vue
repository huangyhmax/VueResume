<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in items" :key="i.id"
            v-bind:class = "{active:currentTab === i}"
            v-on:click="currentTab = i">
            <svg class="icon">
              <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
            </svg>
        </li>
        <!--<li v-bind:class="{active:currentTab===5}" v-on:click="currentTab=5">
          <svg class="icon">
              <use xlink:href="#icon-phone"></use>
          </svg>
        </li>-->
      </ol>
    </nav>
    <ol class="panes">
      <!--<li v-for="i in items" :key="i.id" v-bind:class="{hover:currentTab===i}">
          标签{{i}}
      </li>-->
      <li v-bind:class="{hover:currentTab===0}">
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
      </li>
      <li v-bind:class="{hover:currentTab===1}">
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
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  data(){
    return{
      currentTab:0,
      items:[0,1,2,3,4,5],
      icons:['identity','education','work','project','award','phone'],
      labelPosition: 'top',
      profile: {
        name: '',
        birth: '',
        age: ''
      },
      wordexperience:[{
        company:'',experience:'',time:''
      }]
    }
  },
  methods:{
    // onSubmit(){
    //   console.log(this.profile) //初始化profile就会默认有get和set，哈哈，听不懂，这里再查资料
    // }
    addWordexperience(){
      this.wordexperience.push({
        company:'',experience:'',time:''
      })
    },
    removeWordexperience(index){
      this.wordexperience.splice(index,1)
    }
  },
  created(){  //主键被创办之后的回调
  // setTimeout(()=>{
  //     console.log(this.profile)
  //   },5000)
  }
}
</script>


<style lang="scss">
  #editor{
    /*border:1px solid red;*/
    min-height:100px;
    display: flex;
    >nav{
      background-color:#58B7FF;
      width:64px;
      > ol >li{
        padding:16px;
        text-align: center;
        > .icon{
          width: 32px;
          height: 32px;
          fill:#fff;
        }
        &.active{
          background: white;
          >.icon{
            fill:#58B7FF
          }
        }
      }
    }
    >.panes{
        flex: 1;
      .workblock{
        display: relative;
        .el-icon-delete{
          font-size: 24px;
          color:#58B7FF;
          cursor: pointer;
          display: absolute;
          top: 0;
          right: 0;
        }
      }
      >li{
        display: none;
        padding:24px;
        height: 100%;
        // width: 100%;
        overflow: auto;
        &.hover{
          display: block;
        }
        >h2{
          letter-spacing:8px;
        }
        >.profile{
          margin:16px 0px;
        }
      }
    }
  }

</style>
