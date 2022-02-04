<template>
        <b-row>
            <FooterCardValue v-for="index in bookList" :key="index" :bookList="index"/>
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
      bookList: []
    }
  },
  mounted () {
    axios.get('https://6102a09f79ed680017482214.mockapi.io/api/v1/Books')
      .then((result) => {
        this.bookList = result.data
        console.warn(result)
      })
  }
}
</script>
