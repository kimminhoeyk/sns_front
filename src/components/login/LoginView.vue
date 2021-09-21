<template>
    <div>
        <p class="h4 text-center mb-4">RoYal</p>
        <div class="grey-text">
            <mdb-input v-model="userEmail" label="Your email" icon="envelope" type="email"/>
            <mdb-input v-model="userPw" label="Your password" icon="lock" type="password"/>
        </div>
        <div class="text-center">
            <mdb-btn @click="requestLogin">Login</mdb-btn>
        </div>
        <div>
          <img src="@/assets/kakao.png" @click="apiLogin">
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
      userPw: ''
    }
  },
  methods: {
    async requestLogin () {
      await this.$axios.post('/api/auth/login',
        {email: this.userEmail, password: this.userPw}
      ).then(response => {
        this.$router.push({name: 'Main'})
      }).catch((exception) => {
        alert('잘못된 비밀번호입니다. 다시 확인하세요.')
      })
    },
    async apiLogin () {
      window.location.href = '/api/auth/kakao'
      // window.open('/api/auth/kakao')
      // await this.$axios.get('/api/auth/kakao/redirect'
      // ).then(response => {
      //   console.log(response)
      // }).catch((exception) => {
      // })
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
    padding: 0 20rem 0 20rem;
}
</style>
