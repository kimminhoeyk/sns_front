<template>
    <div>
        <p class="h4 text-center mb-4">RoYal</p>
        <div class="grey-text">
            <mdb-input v-model="username" label="Your name" icon="envelope" type="name"/>
            <mdb-input v-model="userEmail" label="Your email" icon="envelope" type="email"/>
            <mdb-input v-model="userPw" label="Your password" icon="lock" type="password"/>
            <input type="file" @change="uploadimg">
        </div>
        <div class="text-center">
            <mdb-btn @click="requestRegister">Register</mdb-btn>
        </div>
    </div>
</template>

<script>
import { mdbInput, mdbBtn } from 'mdbvue'

export default {
  name: 'Register',
  components: {
    mdbInput,
    mdbBtn
  },
  data () {
    return {
      username: '',
      userEmail: '',
      userPw: '',
      img_file: {}
    }
  },
  methods: {
    async requestRegister () {
      await this.$axios.post('/api/auth/register',
        {name: this.username, email: this.userEmail, password: this.userPw}
      ).then(response => {
        this.$router.push({name: 'Main'})
      }).catch((exception) => {
        alert('다시 확인하세요.')
      })
    },
    async uploadimg (e) {
      let form = new FormData()
      form.append('file', e.target.files[0])
      if (!e.target.files[0]) {
        console.log('이미지 없음')
      } else {
        await this.$axios.post('/api/upload', form, {
          header: { 'Content-Type': 'multipart/form-data' }
        }).then((res) => {
          this.img_file = res.data
          console.log(this.img_file)
        })
          .catch(err => console.log(err))
      }
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
