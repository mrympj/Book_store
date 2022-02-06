<template>
<b-list-group>
  <b-list-group-item>{{bookList.author}}</b-list-group-item>
</b-list-group>
</template>

<script>
export default {
  props: {
    bookList: Object
  }
}
</script>
