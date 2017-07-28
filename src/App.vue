<template>
  <div id="app">
    <Topbar class="topbar"/>
    <main>
      <Editor class="editor"/>
      <Preview class="preview"/>
    </main>
  </div>
</template>

<script>
import Topbar from './components/Topbar'
import Editor from './components/Editor'
import Preview from './components/Preview'
export default {
  name: 'app',
  components: {
    Topbar,Editor,Preview
  }
}
</script>

<style lang="scss">
html,body,#app{height:100%;overflow: hidden;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* 考虑到vh兼容性差，所以不推荐使用这个用法，因此main占据页面剩余高度的css写法需要替换
  height:100vh;
  display:flex;
  flex-direction: column;*/
}
.topbar{

}
main{

  display: flex;
  height: 100%;
  /*对应配套vh的写使用
  flex: 1;
  */
  >.editor{
    width: 20em;
  }
  >.preview{
    flex: 1;
  }
}

</style>
