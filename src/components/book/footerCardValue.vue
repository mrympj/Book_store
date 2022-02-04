<template>
<b-col>
    <div class="col-12 p-1">
      <router-link :to="'/detail/' + bookList.id" style="text-decoration: none;">
        <b-card :img-src="bookList.image" img-alt="Card image" img-left class="mb-3" style="color:#818181; background-color: white">
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
