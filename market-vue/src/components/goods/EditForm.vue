<template>
  <div>
    <el-dialog
      title="添加商品"
      :visible.sync="dialogFormVisible"
      @close="clear">
      <el-form v-model="form" style="text-align: left" ref="dataForm">
        <el-form-item label="商品名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="售卖者" :label-width="formLabelWidth" prop="seller">
          <el-input v-model="form.seller" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" :label-width="formLabelWidth" prop="price">
          <el-input v-model="form.price" autocomplete="off" placeholder="输入格式：价格："></el-input>
        </el-form-item>
        <el-form-item label="图片" :label-width="formLabelWidth" prop="cover">
          <el-input v-model="form.cover" autocomplete="off" placeholder="图片 URL"></el-input>
        </el-form-item>
        <el-form-item label="简介" :label-width="formLabelWidth" prop="information">
          <el-input type="textarea" v-model="form.information" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="分类" :label-width="formLabelWidth" prop="cid">
          <el-select v-model="form.category.id" placeholder="请选择分类">
            <el-option label="日常" value="1"></el-option>
            <el-option label="运动" value="2"></el-option>
            <el-option label="学习" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="id" style="height: 0">
          <el-input type="hidden" v-model="form.id" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'EditForm',
    data () {
      return {
        dialogFormVisible: false,
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
        formLabelWidth: '120px'
      }
    },
    methods: {
      clear () {
        this.form = {
          id: '',
          name: '',
          seller: '',
          price: '',
          cover: '',
          information: '',
          category: ''
        }
      },
      onSubmit () {
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
            this.dialogFormVisible = false
            this.$emit('onSubmit')
          }
        })
      }
    }
  }
</script>

<style scoped>
  .el-icon-circle-plus-outline {
    margin: 50px 0 0 20px;
    font-size: 100px;
    float: left;
    cursor: pointer;
  }
</style>


