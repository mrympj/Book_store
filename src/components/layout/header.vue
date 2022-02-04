<template>
    <div>
        <b-navbar toggleable="lg" type="dark" class="header">
        <b-navbar-nav>
        <b-nav-form >
          <b-form-input size="sm" class=" border-0 mr-sm-2" placeholder="Search books"></b-form-input>
        </b-nav-form>
        </b-navbar-nav>
            <b-navbar-nav class="ml-auto" >
                <router-link to="/bookregistration">
                    <b-icon icon="person" style="color: #3b3b3b;"></b-icon>
                </router-link>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<style scoped>

</style>
