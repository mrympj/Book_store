<template>
    <div>
        <b-navbar toggleable="lg" type="dark" class="header">
        <b-navbar-nav>
            <b-nav-form >
                <b-input-group is-text class="border-0">
                    <b-icon  style="background-color:white;" icon="search"></b-icon>
                </b-input-group>
                <b-form-input type="search" placeholder="Search books" class="border-0"></b-form-input>
            </b-nav-form>
        </b-navbar-nav>
            <b-navbar-nav class="ml-auto" >
                <router-link to="/bookregistration">
                    <b-icon class="icon" icon="person" style="color: #3b3b3b;"></b-icon>
                </router-link>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<style scoped>
.icon:hover{
  transform: scale(1.3);
  transition: .5s;
}
</style>
