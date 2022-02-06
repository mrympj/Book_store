<template>
        <b-row class="mx-1">
            <FooterCardValue v-for="index in bookList.slice(0,5)" :key="index" :bookList="index"/>
        </b-row>
</template>

<script>
import axios from 'axios'
import FooterCardValue from '../book/footerCardValue.vue'

export default {

  components: {
    FooterCardValue
  },
  data () {
    return {
      bookList: {}
    }
  },
  mounted () {
    axios.get('https://6102a09f79ed680017482214.mockapi.io/api/v1/Books')
      .then((result) => {
        this.bookList = result.data
      })
  }
}
</script>
