<template>
      <div>
        <Basecard v-for="index in booklist.length" :key="index" :book="booklist[index-1]"/>
      </div>
</template>

<script>
import Basecard from '../components/ui/basecard'

export default {
  components: {
    Basecard
  },
  data () {
    return {
      booklist: []
    }
  },
  mounted: function () {
    fetch('https://6102a09f79ed680017482214.mockapi.io/api/v1/Books', {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((result) => {
      this.booklist = result
    })
  }
}
</script>
