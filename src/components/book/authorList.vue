<template>
<ul style="list-style-type: none;" align-h="start" class="text-left d-flex flex-column">
  <router-link class="link" :to="'/detail/' + bookList.id"><li>{{bookList.author}}</li></router-link>
</ul>
</template>

<script>
export default {
  props: {
    bookList: Object
  }
}
</script>

<style scoped>
.link{
  text-decoration: none;
  color: rgb(129, 129, 129);;
}
.link:hover{
  color: black;
   transform: scale(1.03);
  transition: .3s;
}
</style>
