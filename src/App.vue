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
main{
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
    overflow: hidden;
  }
}

</style>
