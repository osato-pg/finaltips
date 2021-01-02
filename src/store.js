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
    wallet: '',
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
  },
  actions: {
    createUserAccount(context, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          db.collection('users').add({
            name: this.state.name,
            email: email,
            password: password,
            wallet: 500,
          });
        })
        .catch(error => {
          console.error('Account Regeister Error', error.message);
        });
    },
    signIn({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          db.collection('users')
            .where('email', '==', email)
            .get()
            .then(querySnapshot => {
              querySnapshot.forEach(doc => {
                commit({ type: 'updateState', name: doc.data().name });
                commit({ type: 'updateState', wallet: doc.data().wallet });
              });
            });
        })
        .catch(error => {
          alert('Error!', error.message);
          console.error('Account Login Error', error.message);
        });
    },
  },
});
