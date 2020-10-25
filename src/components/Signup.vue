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
    <button @click="createUserAccount">新規登録</button><br>
    <router-link to="/">ログインはこちら</router-link>
  </div>
</template>

<script>
import firebase from "../firebase.js";

export default {
  name: "singup",
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods:{
    createUserAccount() {
       firebase
        .auth()
        .createUserWithEmailAndPassword(this.name, this.email, this.password)
        .then(() => {
          alert("Create Account");
          this.$router.push("/Mypage")
        })
        .catch(error => {
          alert("Error!", error.message);
          console.error("Account Regeister Error", error.message);
        });
    }
  }
};
</script>