<template>
    <b-row>
      <Sidebar/>
      <div class="col-8 mx-1 mt-3">
      <Header/>
      <b-row align-h="start" class="m-4">
        <b>We recommend</b>
      </b-row>
      <div class="p-3">
        <b-card no-body class="overflow-hidden border-0" >
          <b-row no-gutters>
            <b-col md="2">
              <b-card-img :src="selectBook.image" alt="Image" class="shadow-sm bg-white m-3"></b-card-img>
            </b-col>
            <b-col>
              <b-card-body style="font-size: 70%" class="m-3">
                <b-card-text class="text-justify" style="color: #818181">
                  <p style="font-size:20px; color: black">{{selectBook.name}}</p>
                  <p style="color: red">by {{selectBook.author}}</p>
                  <p>{{selectBook.Description}}<br><br></p>
                  <div  class="d-flex justify-content-between">
                  <p style="font-size:0.9rem; color: black">$ {{selectBook.price}}</p>
                  <b-button class="m-3 button" variant="link" v-on:click="onSubmit(selectBook.id)">delete</b-button>
                  </div>
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
      <footer class="mt-5">
        <Footercard/>
      </footer>
      </div>
    </b-row>
</template>

<script>
import Header from '../layout/header.vue'
import Sidebar from '../layout/sidebar.vue'
import Footercard from '../ui/footercard.vue'

export default {
  components: {
    Header,
    Sidebar,
    Footercard
  },
  props: {
    selectBook: Object
  },
  methods: {
    onSubmit: function (id) {
      fetch('https://6102a09f79ed680017482214.mockapi.io/api/v1/Books/' + id, {
        method: 'Delete'
      }).then((response) => {
        return response.json()
      })
    }
  }
}
</script>

<style scoped>
.sidebar{
  color: white;
}
.button{
  color: #818181;
  text-decoration: none;
}
.button:hover{
  color: black;
}
</style>
