<template>
  <div>
    <h1>欢迎来到校园二手市场，请理性消费！</h1>
    <h2>今日推荐</h2>
  </div>
</template>

<script>
    export default {
        name: "Appindex",
      data(){
        return{

        }
      }
    }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
