<template>
  <div>
    <div class="top-information">
      <p>{{ name }}さんようこそ!!</p>
      <p>{{ wallet }}円</p>
    </div>
    <h1>ユーザー一覧</h1>
    <button @click="SignOut">ログアウト</button>
    <p>ユーザー名</p>
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.getters.name;
    },
    wallet() {
      return this.$store.getters.wallet;
    },
  },
  methods: {
    SignOut() {
      this.$store.dispatch('signOut');
      this.$router.push('/');
    },
  },
};
</script>

<style  scoped>
.top-information {
  display: flex;
  justify-content: space-between;
}
</style>