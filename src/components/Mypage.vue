<template>
  <div>
    <div class="top-information">
      <p>{{ name }}さんようこそ!!</p>
      <p>{{ wallet }}円</p>
    </div>
    <h1>ユーザー一覧</h1>
    <button @click="SignOut">ログアウト</button>
    <p>ユーザー名</p>
    <ul>
      <li v-for="(value, index) in userInfo" :key="index">
        {{ value }}
        <div>
          <button>wallet残高を見る</button>
          <button>送る</button>
        </div>
      </li>
    </ul>
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
    userInfo() {
      return this.$store.getters.userInfo;
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

li {
  list-style: none;
  display: flex;
  justify-content: space-between;
}

button {
  border-radius: 10px;
}
</style>