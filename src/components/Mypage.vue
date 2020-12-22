<template>
  <div>
    <p>{{ name }}さんようこそ</p>
    <h1>ユーザー一覧</h1>
    <button @click="SignOut">ログアウト</button>
    <p>ユーザー名</p>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.state.name;
    },
  },
  methods: {
    SignOut() {
      this.$router.push('/');
    },
  },
};
</script>