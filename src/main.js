import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state,x) {
      state.count = state.count+x;
    }
  }, 
  getters: {
    getCount(state) {
      return state.count;
    }
  },
  actions: {
    setCount(context, x) {
      x = x+2;
      context.commit('increment',x);

    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
