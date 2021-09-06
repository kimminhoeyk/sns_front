<template>
  <div class="hello">
    <router-link to="/login/loginView">
      <button color="primary" >router-link</button>
    </router-link>

    <button color="default" @click="onBtnClicked()">router.push</button>
  </div>
</template>

<script>
import { mdbBtn } from 'mdbvue'

export default {
  name: 'HelloWorld',
  components: {
    mdbBtn
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    onBtnClicked () {
      this.$router.push('/login/loginView')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
