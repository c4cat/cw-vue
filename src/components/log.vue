<template>
  <section>
    <router-link to="/login">登陆</router-link>  
    <router-link to="/regType">注册</router-link>  
  </section>
</template>

<script>
export default {
  name: 'log',
  data () {
    return {}
  }
}
</script>

<style scoped>
section {
  position: relative;
  margin-top:50%;
}
a {
  font-size: 50px;
  display: block;
  color: #000;
  text-decoration: none;
}
</style>
