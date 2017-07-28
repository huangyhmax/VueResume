<template>
  <div id="topbar">
    <div class="logo">
        <i class="el-icon-menu iconcolor"></i>
        Atuo Resume
    </div>
     <div class="actions">
        <el-button :plain="true">注册</el-button>
        <el-button type="primary">登录</el-button>
        <el-button type="success">预览</el-button>
     </div>
  </div>
</template>
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


