<template>
  <section>
    <form @submit.prevent="login">
      <div><input type="text" placeholder="账号" v-model="user.account" /></div>
      <div><input type="password" placeholder="密码" v-model="user.password" /></div>
      <div><button type="submit">确定</button></div>
    </form>
  </section>
</template>

<script>
import url from '../assets/js/url.js'
import common from '../assets/js/common.js'

export default {
  name: 'login',
  data () {
    return {
      user: {
        account: '18820774122',
        password: '123456aa',
        user_type: 0
      }
    }
  },
  methods: {
    async login () {
      const cha = await common.req(url.prefix + url.links.check_cha_type, this.user)
      if (!cha) { return false }
      this.user.user_type = cha && cha.user_type
      common.localSet('cha', cha.user_type)
      const log = await common.req(url.prefix + url.links.log, this.user)
      if (!log) { return false }
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
section {
  position: relative;
  margin-top:50%;
}
</style>
