<template>
      <div>
        <Card :selectBook="selectBook"/>
      </div>
</template>

<script>
import Card from '../components/ui/descriptioncard.vue'
import axios from 'axios'

export default {
  components: {
    Card
  },
  data () {
    return {
      selectBook: {},
      bookList: []
    }
  },
  mounted () {
    axios.get('https://6102a09f79ed680017482214.mockapi.io/api/v1/Books/' + this.$route.params.id)
      .then((result) => {
        this.selectBook = result.data
      })
    axios.get('https://6102a09f79ed680017482214.mockapi.io/api/v1/Books')
      .then((result) => {
        this.bookList = result.data
      })
  }
}
</script>
