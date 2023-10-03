// store.js
import {createStore} from 'vuex'

const store = createStore({
    state() {
        return {
            count: localStorage.getItem('x_xsrf_token'),
            token: null
        }
    },
    mutations: {
        increment(state) {
            state.count++
        },
        setToken(state, token) {
            state.token = token;
        },
        deleteToken(state) {
            state.token = null
        }
    }
})

export default store;
