import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: () => ({
      counter: 0
    }),
    mutations: {
      increment(state) {
        state.counter++
      }
    },
    modules: {
      auth: {
        namespaced: true,
        state: () => ({
          user: null
        }),
        actions: {
          // eslint-disable-next-line require-await
          login: async ({ commit }, params) => {
            console.log('-----', params)
            commit('updateUserInfo', params)
          },
          logout: ({ commit }) => {
            commit('updateUserInfo', null)
          }
        },
        mutations: {
          updateUserInfo(state, user) {
            state.user = user
          }
        },
        getters: {
          currentUser: (state) => state.user
        }
      }
    }
  })

export default store
