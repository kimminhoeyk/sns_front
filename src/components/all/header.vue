<template>
    <div id="header">
        <div class="logo">
            <span @click="route('Main')">RoYal</span>
        </div>
        <div class="sign">
            <div>
                <span @click="route('LoginView')">로그인</span>
            </div>
            <div>
                <span>회원가입</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    route (name) {
      this.$router.push({name: name})
    }
  }
}
</script>

<style>
#header{
    width: 100%;
    height: 100%;
    margin-bottom: 3rem;
    margin-top: 1rem;
    padding: auto;
    display: flex;
}
    .logo{
        width: 100%;
        height: 100%;

    }
    .sign{
        width: 100%;
        height: 100%;
        display: flex;
        text-align: right;

    }

</style>
