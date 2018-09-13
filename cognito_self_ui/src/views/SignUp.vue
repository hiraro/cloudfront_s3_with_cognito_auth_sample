<template>
  <div class="singup">
    <h1>Sign up</h1>
    <form @submit.stop.prevent="signUp">
      <p v-show="msg">{{ msg }}</p>
      <p v-show="errMsg">{{ errMsg }}</p>
      <input type="email" placeholder="Email" v-model="email" required>
      <input type="password" placeholder="Password" v-model="password" required>
      <input type="submit" value="Submit">
    </form>
    <p>Do you have an account?
      <router-link :to="{ name: 'signin'}">Sign in now!!</router-link>
    </p>
  </div>
</template>

<script>
import * as UserUtil from '@/utils/UserUtil';

export default {
  name: 'SignUp',
  props: ['flashMsg', 'flashErrMsg'],
  data() {
    return {
      email: '',
      password: '',
      errMsg: this.flashErrMsg,
      msg: this.flashMsg,
    };
  },
  methods: {
    async signUp() {
      try {
        await UserUtil.signUp(this.email, this.password);
        this.$router.push({ name: 'signin', params: {flashMsg: '確認メールのリンクをクリックしてからサインインしてください。' }});
      } catch(e) {
        this.errMsg = e.message;
      }
    },
  },
};
</script>
