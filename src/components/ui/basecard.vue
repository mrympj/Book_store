<template>
    <div>
      <b-row style="background-color: #fdfdfd">
          <Sidebarvalue v-for="index in book" :key="index" :bookList="index" :color="color"/>
      </b-row>
    </div>
</template>

<script>
import Sidebarvalue from '../book/sidebarvalue.vue'
import axios from 'axios'

export default {

  components: {
    Sidebarvalue
  },
  data () {
    return {
      book: [],
      color: 'red'
    }
  },
  methods: {
    onSubmit: function (id) {
      fetch('https://6102a09f79ed680017482214.mockapi.io/api/v1/Books/' + id, {
        method: 'Delete'
      }).then((response) => {
        return response.json()
      })
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
