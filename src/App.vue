<template>
  <div id="app" v-bind:class="{exitcontrol:previewMode}">
    <Topbar class="topbar" v-on:preview="preview"/>
    <main>
      <Editor v-bind:resume="resume" class="editor"/>
      <Preview v-bind:resume="resume" class="preview"/>
    </main>
    <el-button type="primary" id="exit" v-on:click="exitpreview">退出预览</el-button>
    <!--这里切换预览和退出时候，css使用transition,看vue的文档-->
    <!--还差路由-->
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
export default {
  name: 'app',
  data(){
    return{
      previewMode:false,
      resume:{
        labelPosition: 'top',
        profile: {name: '',city:'',birth: '',age: '',work:''},
        education:[{school:'',timeline:'',profession:'',degree:''}],
        wordexperience:[{company:'',time:'',experience:''}],

        project:[{title:'',time:'',content:''}],
        awards:[{awardname:'',awardtime:''}],
        contact:{phone:'',email:'',webchat:'',github:'',address:''}
      }
    }
  },
  methods:{
    preview(){
      this.previewMode=true
    },
    exitpreview(){
      this.previewMode=false
    }
  },
  components: {
    Topbar,Editor,Preview
  }
}
</script>

<style lang="scss">
html,body,#app{height:100%;overflow: hidden}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* 考虑到vh兼容性差，所以不推荐使用这个用法，因此main占据页面剩余高度的css写法需要替换
  height:100vh;
  display:flex;
  flex-direction: column;*/
}
#exit{
  display: none;
}
.exitcontrol{
  #topbar{  //注意这里生成到html里，topbar是有id的，权重比较高，所以会盖住.topbar的设置
    display: none;
  }
  #editor{
    display: none;
  }
  #preview{
  max-width:800px;
  margin: 32px auto 0px auto !important;
  }
  #exit{
    display: inline-block;
    position:fixed;
    right: 16px;
    bottom: 8px;
  }
}
.icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
.topbar{
  // >.actions{
  // font-weight: bold;
  // }
  box-shadow:0 0 3px hsla(0, 0, 0, 0.5);
  position: relative;
  z-index:1;
}
#app main{
  display: flex;
  height: 100%;
  background-color:#F9FAFC;
  /*对应配套vh的写使用
  flex: 1;
  */
  >.editor{
    width: 40em;
    margin:16px 8px 16px 16px;
    background-color:#fff;
    box-shadow:0 0 3px hsla(0, 0, 0, 0.3);
    border-radius: 4px;
    overflow: auto;
  }
  >.preview{
    flex: 1;
    margin:16px 16px 16px 8px;
    background-color:#fff;
    box-shadow:0 0 3px hsla(0, 0, 0, 0.3);
    border-radius: 4px;
    overflow: auto;
  }
}

</style>
