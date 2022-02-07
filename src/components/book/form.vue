<template>
  <b-container style="background-color: #ecf2ff">
    <b-row style="background-color: #ecf2ff">
  <div style="background-color: #ecf2ff" class="m col-7">
    <label>Name</label>
    <input type="text" name="name" v-model="posts.name" placeholder="Enter the name of the book..">

    <label>author</label>
    <input type="text" name="author" v-model="posts.author" placeholder="Enter the author's name..">

    <label>Description</label>
    <input type="text" name="Description" v-model="posts.Description" placeholder="Enter a description of the book..">

    <label>image</label>
    <input type="text" name="image" v-model="posts.image" placeholder="Enter the image url..">

    <label>price</label>
    <input type="text" name="price" v-model="posts.price" placeholder="Enter the price of the book..">

    <label>rate</label>
    <input type="text" name="rate" v-model="posts.rate" placeholder="Enter the book rate..">

    <label>year</label>
    <input type="text" name="year" v-model="posts.year" placeholder="Enter the date the book was published..">

    <input v-on:click="postdata()" type="submit" value="add">
  </div>
  <div class="col-5" style="background-color: #ecf2ff">
      <img src="https://i.pinimg.com/originals/fc/fb/06/fcfb067bf3181b62b8cfc343d661188b.jpg" class="image" style="opacity:90%" height="715rem" width="500rem">
    </div>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      posts: {
        author: '',
        name: '',
        Description: '',
        image: '',
        price: '',
        year: ''
      }
    }
  },
  methods: {
    postdata () {
      axios.post('https://6102a09f79ed680017482214.mockapi.io/api/v1/Books/', this.posts)
    }
  }
}
</script>

<style scoped>

.image:hover{
  transform: scale(1.06);
  transition: .5s;
}

input[type=text], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type=submit] {
  width: 100%;
  background-color: #17a2b8 ;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #0e6370 ;
}

div {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}
</style>
