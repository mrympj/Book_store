<template>
    <div>
      <b-row align-h="start" class="m-4">
        <b>For You</b>
      </b-row>
      <b-row align-h="center">
      <Card v-for="index in book.slice(4,7)" :key="index" :bookList="index" />
      </b-row>
      <b-row align-h="between" style="font-size:1.3rem">
        <b class="m-2 col-1">Browse</b>
      </b-row>
      <b-row>
          <b-row style="background-color: #fdfdfd" class="col-7 p-1">
          <BrowseCardValue v-for="index in book.slice(0,6)" :key="index" :bookList="index"/>
          </b-row>
          <b-col class="col-4 mx-5">
            <p class=" mx-5 text-left"><b>Authors</b></p>
            <AuthorList v-for="index in book.slice(0,6)" :key="index" :bookList="index"/>
          </b-col>
      </b-row>
    </div>
</template>

<script>
import Card from '../ui/card.vue'
import axios from 'axios'
import BrowseCardValue from '../book/browseCardValue.vue'
import AuthorList from '../book/authorList.vue'

export default {

  components: {
    BrowseCardValue,
    Card,
    AuthorList
  },
  data () {
    return {
      book: []
    }
  },
  mounted () {
    axios.get('https://6102a09f79ed680017482214.mockapi.io/api/v1/Books')
      .then((result) => {
        this.book = result.data
        console.warn(result)
      })
  }
}
</script>

<style scoped>
   .button{
      text-decoration: none
    }
    .router{
      text-decoration: none
    }
</style>
