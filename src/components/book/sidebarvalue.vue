<template>
<b-col>
    <div class="sidebar col-12">
      <router-link :to="'/detail/' + bookList.id" style="text-decoration: none;">
        <b-card :img-src="bookList.image" img-alt="Card image" img-left class="mb-3" style="color:white; background-color: #30385c">
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
