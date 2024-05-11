<template>
  <h1>Hello App!</h1>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/accounts">Go to accounts</RouterLink>
    <RouterLink to="/budgets">Go to budgets</RouterLink>
    <RouterLink to="/transactions">Go to transcations</RouterLink>
    <RouterLink to="/accounts/create">Go to Accounts create</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
