import * as components from './components'

export default [
    { path:'/accounts',
        name: 'accountsListView',
        component: components.AccountsListView
    },
    { path:'/accounts/create',
        name: 'createAccount',
        component: components.CreateEditAccount
    },
    { path:'/accounts/:accountId/edit',
        name: 'editAccount',
        component: components.CreateEditAccount
    }
]
