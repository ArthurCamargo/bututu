import * as components from './components'

export default [
    { path:'/accounts',
        name: 'accounts-list',
        component: components.AccountsListView
    },
    { path:'/accounts/create',
        name: 'account-create',
        component: components.CreateEditAccount
    }
]
