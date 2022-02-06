<template>
    <div class="col-3 m-1 ">
      <router-link :to="'/detail/' + bookList.id" style="text-decoration: none;">
        <b-card :img-src="bookList.image" img-alt="Card image" img-height="67rem" img-width="65rem" img-left class="mb-3 p-4 shadow-lg border-0" style="max-height:13rem; max-width:18rem; min-height:9rem; min-width:14 rem; color:#818181; background-image: linear-gradient( #ffdde1, #ee9ca7);">
          <b-card-text style="font-size: 0.9rem">
            {{bookList.name}}<br>
            by {{bookList.author}}<br><br>
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
