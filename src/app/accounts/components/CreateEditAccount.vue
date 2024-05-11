<script>
import { mapActions } from 'vuex'
import { CATEGORIES } from '../../../consts'

export default {
    name: 'accounts-create-edit-view',
    data: () => {
        return {
        categories: CATEGORIES,
        selectedAccount: {}
        }
    },
    methods: {
        ...mapActions([
            'addAccount'
        ]),
        saveNewAccount () {
            this.addAccount(this.selectedAccount).then(() => {
                this.selectedAccount = {}
                this.$routes.push({ name: 'accountsListView'})
            })
        }
    }
}
</script>


<template>
    <div id="accounts-create-edit-view">
        You can create and edit your accounts here

        <router-link :to="{ name: 'accountsListView' }">
            View all accounts
        </router-link>
            <form class="form" @submit.prevent="saveNewAccount">
                <label for="name" class="label">Name</label>
                <p class="control">
                    <input type="text" class="input" name="name" v-model="selectedAccount.name">
                </p>
                <label for="category" class="label">Category</label>
                <p class="control">
                    <span class="select">
                        <select name="category" v-model="selectedAccount.category">
                            <option v-for="value, key in categories" :key="value" :value="key">{{ value }}</option>
                        </select>
                    </span>
                </p>
                <label for="balance" class="label">Balance</label>
                <p class="control">
                    <input type="text" class="input" name="balance" v-model="selectedAccount.balance">
                </p>
                <div class="control is-grouped">
                    <p class="control">
                        <button class="button is-primary">Submit</button>
                    </p>
                    <p class="control">
                        <router-link :to="{ name: 'accountsListView' }">
                            <button class="button is-link">Cancel</button>
                        </router-link>
                    </p>
                </div>
            </form>
    </div>
</template>

<style scoped lang='scss'>
#accounts-create-edit-view {
    color:white;
    padding: 10px;
}
</style>
