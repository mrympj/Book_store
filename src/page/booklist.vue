<template>
      <div style="background-color:white">
        <Header />
        <hr>
        <Basecard/>
      </div>
</template>

<script>
import Basecard from '../components/ui/basecard'
import Header from '../components/layout/header.vue'

export default {
  components: {
    Header,
    Basecard
  }
}
</script>
