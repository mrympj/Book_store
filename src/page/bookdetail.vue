<template>
      <div>
        <Card :book="booklist" />
      </div>
</template>

<script>
import Card from '../components/ui/descriptioncard.vue'

export default {
  components: {
    Card
  },
  data () {
    return {
      booklist: {}
    }
  },
  mounted: function () {
    fetch('https://6102a09f79ed680017482214.mockapi.io/api/v1/Books/' + this.$route.params.id, {
      method: 'get'
    }).then((response) => {
      return response.json()
    }).then((result) => {
      this.booklist = result
    })
  }
}
</script>
