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
    <button>ログイン</button><br />
    <router-link to="/Signup">新規登録はこちら</router-link>
  </div>
</template>

<script>
export default {
  name: 'singin',
  data() {
    return {
      email: '',
      password: '',
    };
  },
};
</script>