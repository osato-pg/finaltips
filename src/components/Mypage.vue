<template>
  <div>
    <h1>ユーザー一覧</h1>
    <button @click="SignOut">ログアウト</button>
    <p>ユーザー名</p>
  </div>
</template>

<script>
export default {
  methods: {
    SignOut() {
      this.$router.push("/")
    }
  }
};
</script>