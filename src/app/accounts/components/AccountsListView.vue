<script>
import { mapState, mapActions } from 'vuex'
import { CATEGORIES } from '../../../consts'

export default {
    name: 'accounts-list-view',

    data () {
        return {
            categories: CATEGORIES
        }
    },

    methods: {
        ...mapActions([
        'deleteAccount'
        ]),
        confirmDeleteAccount(account) {
            if(confirm(`Are you sure you want to delete ${account.name}?`)) {
                this.deleteAccount(account)
            }
        },
        computed: {
            ...mapState({
                'accounts': state => state.accounts.accounts
            })
        }
    }
}

</script>

<template>
    <div id="accounts-list-view">
        I'm a list of accounts!

        <router-link :to="{ name: 'createAccount' }">Add an account</router-link>

        <ul>
            <li v-for="account in accounts" :key="account.id">
                {{ account.id}}
                {{ account.name }}
                <span class="tag is-small is-info">{{ categories[account.category] }}</span>
                ${{ account.balance }}
            </li>
        </ul>
    </div>
</template>

