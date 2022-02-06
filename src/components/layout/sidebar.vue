<template>
    <div class="sidebar col-3">
        <div class="sidebar-header p-3" style="background-color: #2c3254">
              <router-link to='/' class="header">
                <b-icon icon="bar-chart-steps" class="rounded-circle" variant="light"></b-icon>
                BOOK STORE
              </router-link>
        </div>
        <div style="background-color: #30385c">
          <Sidebarvalue v-for="index in bookList.slice(2,9)" :key="index" :bookList="index"/>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Sidebarvalue from '../book/sidebarvalue.vue'

export default {

  components: {
    Sidebarvalue
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
      })
  }
}
</script>

<style scoped>
.header{
  text-decoration: none;
  color: white;
}
</style>
