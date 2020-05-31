<template>
  <div>
    <el-row style="height: 840px;">
      <!--<search-bar></search-bar>-->
      <el-tooltip effect="dark" placement="right"
                  v-for="item in goods"
                  :key="item.id">
        <p slot="content" style="font-size: 14px;margin-bottom: 6px;">{{item.name}}</p>
        <p slot="content" style="font-size: 13px;margin-bottom: 6px">
          <span>{{item.seller}}</span>
        </p>
        <p slot="content" style="width: 300px" class="information">{{item.information}}</p>
        <el-card style="width: 135px;margin-bottom: 20px;height: 280px;float: left;margin-right: 15px" class="goods"
                 bodyStyle="padding:10px" shadow="hover">
          <div class="image">
            <img :src="item.image" alt="图片">
          </div>
          <div class="info">
            <div class="title">
              <a href="">{{item.name}}</a>
            </div>
          </div>
          <div class="price">{{item.price}}</div>
          <el-button type="primary" plain @click="buy">购买</el-button>
        </el-card>
      </el-tooltip>
    </el-row>
    <el-row>
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pagesize"
        :total="goods.length">
      </el-pagination>
    </el-row>
  </div>
</template>

<script>
    import EditForm from "./EditForm";
    import SearchBar from "./SearchBar";
    export default {
        name: "Goods",
        components:{EditForm, SearchBar},
      data () {
        return {
          goods: [],
          currentPage: 1,
          pagesize: 17
        }
      },
      mounted: function () {
        this.loadGoods()
    },
      methods: {
        loadGoods () {
          var _this = this
          this.$axios.get('/goods').then(resp => {
            if (resp && resp.status === 200) {
              _this.goods = resp.data
            }
          })
        },
        handleCurrentChange: function (currentPage) {
          this.currentPage = currentPage
          console.log(this.currentPage)
        },
        buy(){
          this.$confirm('确认购买？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '购买成功!'
            });
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取购买'
            });
          });
        },
        searchResult () {
          var _this = this
          this.$axios
            .get('/search?keywords=' + this.$refs.searchBar.keywords, {
            }).then(resp => {
            if (resp && resp.status === 200) {
              _this.goods = resp.data
            }
          })
        },
        deleteGoods (id) {
          this.$confirm('此操作将永久删除, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
              this.$axios
                .post('/delete', {id: id}).then(resp => {
                if (resp && resp.status === 200) {
                  this.loadGoods()
                }
              })
            }
          ).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            })
          })
          // alert(id)
        },
        editGoods (item) {
          this.$refs.edit.dialogFormVisible = true
          this.$refs.edit.form = {
            id: item.id,
            name: item.name,
            seller: item.seller,
            price: item.price,
            cover: item.image,
            information: item.information,
            category: {
              id: item.category.id.toString(),
              cname: item.category.cname
            }
          }
        }
      }
    }
</script>

<style scoped>
  .image {
    width: 115px;
    height: 172px;
    margin-bottom: 7px;
    overflow: hidden;
    cursor: pointer;
  }

  img {
    width: 115px;
    height: 172px;
    /*margin: 0 auto;*/
  }

  .title {
    font-size: 14px;
    text-align: left;
  }

  .author {
    color: #333;
    width: 102px;
    font-size: 13px;
    margin-bottom: 6px;
    text-align: left;
  }

  .information {
    display: block;
    line-height: 17px;
  }

  a {
    text-decoration: none;
  }

  a:link, a:visited, a:focus {
    color: #3377aa;
  }
</style>
