<template>
  <div class="main">
    <h1>欢迎页面</h1>
    <el-button @click="beginApp">开始使用</el-button>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {
    msg: String
  },
  methods: {
    beginApp: function() {
      this.$router.push("home");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
