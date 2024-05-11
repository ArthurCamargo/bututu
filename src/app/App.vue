<template>
    <h1>HOME</h1>
    <p>{{$route.fullPath}}</p>
    <RouterLink to="/accounts">Go to accounts</RouterLink>
    <RouterLink to="/budgets">Go to budgets</RouterLink>
    <RouterLink to="/transactions">Go to transcations</RouterLink>
  <main>
    <RouterView/>
  </main>
</template>
