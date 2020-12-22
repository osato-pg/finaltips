<template>
  <div>
    <h1>新規登録画面</h1>
    <div>
      <label>ユーザー名</label>
      <input type="text" placeholder="name" v-model="name" />
    </div>
    <div>
      <label>メールアドレス</label>
      <input type="text" placeholder="E-mail" v-model="email" />
    </div>
    <div>
      <label>パスワード</label>
      <input type="text" placeholder="Password" v-model="password" />
    </div>
    <button @click="createUserAccount">新規登録</button><br />
    <router-link to="/">ログインはこちら</router-link>
  </div>
</template>

<script>
export default {
  computed: {
    name: {
      get() {
        return this.$store.getters.name;
      },
      set(value) {
        this.$store.commit({ type: 'updateState', name: value });
      },
    },
    email: {
      get() {
        return this.$store.getters.email;
      },
      set(value) {
        this.$store.commit({ type: 'updateState', email: value });
      },
    },
    password: {
      get() {
        return this.$store.getters.password;
      },
      set(value) {
        this.$store.commit({ type: 'updateState', password: value });
      },
    },
  },
  methods: {
    createUserAccount() {
      this.$store.dispatch('createUserAccount', { email: this.email, password: this.password });
      this.$router.push({ path: 'Mypage' });
    },
  },
};
</script>