<template>
  <div id="box">
      <div class="item">
        this is test
      </div>
  </div>
</template>
<script>
  export default {
  //  name:'Test'
  }
</script>

<style scoped>
#box{
    background-color:red;
    width: 600px;
    height: 600px;
    border: 1px solid #fff;
    margin:10px auto;
    position: relative;
}
.item{
    position: absolute;
    border: 1px solid #ccc;
    width: 200px;
    height: 200px;
    top:50%;
    left: 50%;
    margin-left:-100px;
    margin-top: -100px;
}
</style>

