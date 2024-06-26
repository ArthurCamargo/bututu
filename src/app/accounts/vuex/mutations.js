import { guid } from '../../../utils'

export default {
    ADD_ACCOUNT(state, payload) {
        let id = guid()
        state.accounts[id] = Object.assign({ id : id }, payload.account)
    },
    UPDATE_ACCOUNT(state, payload) {
        state.accounts[payload.account.id] = payload.account
    },
    DELETE_ACCOUNT(state, payload) {
        vue.delete(state.accounts, payload.account.id)
    }
}
