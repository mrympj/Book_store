<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info" class="header p-5">
            <router-link class="header" to="/">BOOK STORE</router-link>
            <b-navbar-nav class="ml-auto" >
                <router-link class="header" to="/bookregistration">add new book</router-link>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<style scoped>
   .header{
      color:rgba(58, 2, 68, 0.863)!important;
      text-decoration: none
    }
</style>
