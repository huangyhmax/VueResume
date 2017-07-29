<template>
  <div id="topbar">
    <div class="logo">
        <i class="el-icon-menu iconcolor"></i>
        Atuo Resume
    </div>
     <div class="actions">
        <el-button :plain="true">注册</el-button>
        <el-button type="primary">登录</el-button>
        <el-button type="success" v-on:click="preview">预览</el-button>
     </div>
  </div>
</template>

<script>
export default {
  methods:{
    preview(){
      // alert(1)
      this.$emit('preview')  //触发preview事件,然后在其父组件App.vue中监听,注意加单引号
    }
  }
}
</script>


<style lang="scss">
  #topbar{
    display:flex;
    justify-content: space-between;
    padding:16px;
    font-size: 20px;
    align-items: center;
    >.logo>.iconcolor{
      color:#58B7FF;
      padding-right:8px;
    }
  }
</style>


