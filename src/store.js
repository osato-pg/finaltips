import Vue from "vue";
import Vuex from "vuex";
import firebase from "./firebase.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: '',
    email:'',
    password:'',
  },
  getters: {
    name: (state) => state.name,
    email: (state) => state.email,
    password: (state) => state.password,
  },
  mutations: {
    updateState(state, newState) {
      Object.assign(state, newState);
    },
    createUserAccount(email, password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.$router.push("/Mypage");
        })
        .catch((error) => {
          console.error("Account Regeister Error", error.message);
        });
    },
  },
  actions: {
    createUserAccount({commit} ,{email, password}) {
      commit('createUserAccount', email, password)
    },
  },
});
