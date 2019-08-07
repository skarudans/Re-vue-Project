<template>
  <div class="notfound"></div>
</template>

<script>
export default {
  created () {
    this.$http.get('http://ttapi.research.itcast.cn/mp/v1_0/articles')
  }
}
</script>

<style>
.notfound {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/images/404.png") no-repeat center / cover;
}
</style>
