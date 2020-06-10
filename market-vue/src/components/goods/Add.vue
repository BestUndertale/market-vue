<template>
  <el-form label-position="left" label-width="0px">
    <el-form-item>
      <h2>填写商品信息</h2>
    </el-form-item>
    <el-form-item>
      <el-input v-model="form.name" placeholder="商品名称" class="input"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="form.price" placeholder="商品价格"class="input"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="form.seller" placeholder="售卖者"class="input"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input v-model="form.cover" placeholder="图片 URL"class="input"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="textarea" v-model="form.information" placeholder="简介" class="information"></el-input>
    </el-form-item>
    <el-form-item  prop="cid" class="input">
      <el-select v-model="form.category.id" placeholder="请选择分类">
        <el-option label="日常" value="1"></el-option>
        <el-option label="运动" value="2"></el-option>
        <el-option label="学习" value="3"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item prop="id" style="height: 0">
      <el-input type="hidden" v-model="form.id" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">添加</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: "Add",
        data(){
          return{
            form: {
              id: '',
              name: '',
              seller: '',
              price: '',
              cover: '',
              information: '',
              category: {
                id: '',
                cname: ''
              }
            },
          }
        },
      methods: {
        onSubmit() {
          this.$axios
            .post('/goods', {
              id: this.form.id,
              image: this.form.cover,
              name: this.form.name,
              seller: this.form.seller,
              price: this.form.price,
              information: this.form.information,
              category: this.form.category
            }).then(resp => {
            if (resp && resp.status === 200) {
              this.$emit('onSubmit');
              this.$message({
                type: 'success',
                message: '添加成功!'
              });
            }
          })
        }
      }
    }
</script>

<style scoped>
  .input {
    margin: 0 auto;
    width: 300px;
    height: 50px;
  }
  .information{
    margin: 0 auto;
    width: 500px;
    height: 50px;
  }
</style>
