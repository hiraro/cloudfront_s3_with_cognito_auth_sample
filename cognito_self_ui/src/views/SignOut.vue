<template>
  <div class="singout">
    <h1>Sign out</h1>
    <p>Please wait......</p>
  </div>
</template>

<script>
import * as UserUtil from '@/utils/UserUtil';

export default {
  name: 'SignOut',
  props: ['flashMsg'],
  data() {
    return {
      msg: this.flashMsg,
    };
  },
  async mounted() {
    try {
      await UserUtil.signOut();
      this.$router.push({ name: 'signin', params: {flashMsg: 'サインアウトしました' }});
    } catch(e) {
      this.msg = e.message;
    }
  },
};
</script>
