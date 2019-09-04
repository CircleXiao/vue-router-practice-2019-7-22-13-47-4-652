<template>
  <div class="main">
    <h1>欢迎页面</h1>
    <input placeholder="请输入用户名" v-model="input" id="input-name" />
    <el-button @click="beginApp">开始使用</el-button>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {
    msg: String
  },
  data() {
    return {
      input: ""
    };
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
#input-name {
  width: 300px;
  height: 30px;
  padding: 4px;
  margin: 20px;
}
</style>
