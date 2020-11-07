<template>
  <div>
    <h1>ログイン画面</h1>
    <div>
      <label>メールアドレス</label>
      <input type="text" placeholder="E-mail" v-model="email" />
    </div>
    <div>
      <label>パスワード</label>
      <input type="text" placeholder="Password" v-model="password" />
    </div>
    <button @click="userSignIn">ログイン</button><br />
    <router-link to="/Signup">新規登録はこちら</router-link>
  </div>
</template>

<script>
export default {
  computed: {
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
  methods:{
    userSignIn() {
      this.$store.dispatch('userSignIn',{email: this.email, password: this.password})
      this.$router.push('/mypage');
    }
  }
};
</script>