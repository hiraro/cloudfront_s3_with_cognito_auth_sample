<template>
  <div class="sorry">
    <h1>Sorry</h1>
    <p v-show="msg">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'Sorry',
  props: {
    msg: {
        type: String,
        default: 'Sorry, an error occurred......',
    }
  },
};
</script>
