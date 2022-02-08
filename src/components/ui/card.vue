<template>
  <div class="col-3 m-1 ">
    <router-link :to="'/detail/' + bookList.id" style="text-decoration: none;">
      <b-card :img-src="bookList.image" img-alt="Card image" img-height="170rem" img-left
              class="mb-3 p-2 shadow-lg border-0 card"
              style="max-height:20rem; min-height:9rem; min-width:14 rem;  color: white; background-image: linear-gradient( #ffdde1, #ee9ca7);">
        <b-card-text>
          <p style="font-size: 1rem"><b>{{bookList.name}}</b><br></p>
          <p style="font-size: 0.8rem">by <b>{{bookList.author}}</b><br><br></p>
        </b-card-text>
      </b-card>
    </router-link>
  </div>
</template>

<script>

export default {
  props: {
    bookList: Object
  }
}
</script>

<style scoped>
.card:hover {
  transform: scale(1.06);
  transition: .5s;
}
</style>
