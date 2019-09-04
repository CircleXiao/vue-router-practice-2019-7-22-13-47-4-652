<template>
  <div class="home">
    <h1>首页</h1>
    <el-button @click="dialogVisible = true">返回</el-button>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose" center>
      <span>点击返回按钮，返回至欢迎页</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  },
  data() {
      return {
          dialogVisible: false
      }
  },
  methods: {
      handleClose (done) {
          this.$confirm('确认返回到欢迎页？')
          .then(_ => {
this.$router.push("main");
          })
          .catch(_ => {});
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
