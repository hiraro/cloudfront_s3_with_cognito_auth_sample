<template>
  <div class="singin">
    <h1>Sign in</h1>
    <form @submit.stop.prevent="signIn" method="post">
      <p v-show="msg">{{ msg }}</p>
      <p v-show="errMsg">{{ errMsg }}</p>
      <input type="email" placeholder="Email" v-model="email" required>
      <input type="password" placeholder="Password" v-model="password" required>
      <input type="submit" value="Submit">
    </form>
    <p>Don't you have an account?
      <router-link :to="{ name: 'signup'}">Sign up now!!</router-link>
    </p>
  </div>
</template>

<script>
import * as UserUtil from '@/utils/UserUtil';
import * as AwsUtil from '@/utils/AwsUtil';

export default {
  name: 'SignIn',
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
    async signIn() {
      try {
        await UserUtil.signIn(this.email, this.password);
        const response = await AwsUtil.get(process.env.VUE_APP_API_NAME, `/${process.env.VUE_APP_API_STAGE}/token`);

        this.$cookie.set("CloudFront-Key-Pair-Id", response.data["CloudFront-Key-Pair-Id"], {secure: true});
        this.$cookie.set("CloudFront-Policy", response.data["CloudFront-Policy"], {secure: true});
        this.$cookie.set("CloudFront-Signature", response.data["CloudFront-Signature"], {secure: true});

        window.location = process.env.VUE_APP_PRIVATE_TOP_URL;
      } catch(e) {
        this.errMsg = e.message;
      }
    },
  },
};
</script>
