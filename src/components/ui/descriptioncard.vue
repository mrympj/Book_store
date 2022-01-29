<template>
  <div class="mt-4">
    <b-card :img-src="book.image" :img-alt="book.name + ' image'" img-left class="mb-3">
      <h3>{{book.name}}</h3>
      <h4>{{book.author}}</h4>
      <h5>{{book.Description}}</h5>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    book: Object
  }
}
</script>
