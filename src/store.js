import Vue from 'vue';
import Vuex from 'vuex';
import firebase from './firebase.js';

const db = firebase.firestore();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: '',
    email: '',
    password: '',
  },
  getters: {
    name: state => state.name,
    email: state => state.email,
    password: state => state.password,
  },
  mutations: {
    updateState(state, newState) {
      Object.assign(state, newState);
    },
    createUserAccount(state, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          db.collection('users').add({
            name: this.state.name,
            email: email,
            password: password,
          });
        })
        .catch(error => {
          console.error('Account Regeister Error', error.message);
        });
    },
    signIn(state, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          db.collection('users')
            .where('email', '==', email)
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                state.name = doc.data().name;
              });
            });
        })
        .catch(error => {
          alert('Error!', error.message);
          console.error('Account Login Error', error.message);
        });
    },
  },
  actions: {
    createUserAccount({ commit }, { email, password }) {
      commit('createUserAccount', { email: email, password: password });
    },
    signIn({ commit }, { email, password }) {
      commit('signIn', { email: email, password: password });
    },
  },
});
