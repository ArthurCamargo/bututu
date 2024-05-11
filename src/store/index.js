import { createStore } from 'vuex'
import { accounts } from '../app/vuex'

const store = createStore({
    state: accounts.state,
    actions: accounts.actions,
    mutations: accounts.mutations
})

export default store
