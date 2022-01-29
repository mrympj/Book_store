<template>
    <b-container class="p-5">
        <b-card class="shadow-sm p-1 mb-1 bg-white rounded">
            <div>
            <b-row>
                <b-col>
                  <div>
                    <img :src="book.image" :alt="book.name + ' image'" />
                  </div>
                </b-col>
                <b-col>
                    <h3>{{book.name}}</h3>
                    <h4>{{book.author}}</h4>
                    <div class="mt-5">
                        <router-link class="m-3 router" :to="'/detail/' + book.id">description</router-link>
                        <b-button class="m-3 button" variant="link" v-on:click="onSubmit(book.id)">delete</b-button>
                    </div>
                </b-col>
            </b-row>
            </div>
        </b-card>
    </b-container>
</template>

<script>
export default {
  props: {
    book: Object
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
   .button{
      text-decoration: none
    }
    .router{
      text-decoration: none
    }
</style>
