<template>
    <div>
        <p class="h4 text-center mb-4">Sign in</p>
        <div class="grey-text">
            <mdb-input v-model="userEmail" label="Your email" icon="envelope" type="email"/>
            <mdb-input v-model="userPw" label="Your password" icon="lock" type="password"/>
        </div>
        <div class="text-center">
            <mdb-btn @click="requestLogin">Login</mdb-btn>
        </div>
    </div>
</template>

<script>
import { mdbInput, mdbBtn } from 'mdbvue'

export default {
  name: 'LoginView',
  components: {
    mdbInput,
    mdbBtn
  },
  data () {
    return {
      userEmail: '',
      userPw: '',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    async requestLogin () {
      await this.$axios.post('/api/auth/login',
        {email: this.userEmail, password: this.userPw}
      ).then(response => {
        console.log(response.data)
        console.log(response.data.message)
        alert(response.data.console.error)
      }).catch((exception) => {
      })
    }

  }
}
</script>

<style>
#app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center; color: #2c3e50;
    margin-top: 60px;
}
</style>
