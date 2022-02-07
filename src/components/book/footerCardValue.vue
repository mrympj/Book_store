<template>
<b-col>
    <div class="col-12 p-1">
      <router-link :to="'/detail/' + bookList.id" style="text-decoration: none;">
        <b-card :img-src="bookList.image" img-alt="Card image" img-height="170rem" img-top class="mb-3 card shadow-sm border-0" style="color:#818181; background-color: white">
          <b-card-text style="font-size: 0.5rem">
            {{bookList.name}}<br>
            by {{bookList.author}}<br><br>
            $ {{bookList.price}}
          </b-card-text>
        </b-card>
      </router-link>
    </div>
</b-col>
</template>

<script>
export default {
  props: {
    bookList: Object
  }
}
</script>

<style scoped>
.card:hover{
  transform: scale(1.06);
  transition: .5s;
}
</style>
