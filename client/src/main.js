// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDsxjm_rxmHvD2CqEMSaD8fjGr8RliAWVc',
  authDomain: 'vue-golang.firebaseapp.com',
  databaseURL: 'https://vue-golang.firebaseio.com',
  projectId: 'vue-golang',
  storageBucket: 'vue-golang.appspot.com',
  messagingSenderId: '378197328038'
}
firebase.initializeApp(config)
let app
firebase.auth().onAuthStateChanged(user => {
  /* eslint-disable no-new */
  if (!app) {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
