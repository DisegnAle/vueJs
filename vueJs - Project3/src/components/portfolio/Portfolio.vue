<template>
  <div>
    <h1>Portfolio component</h1>
    <stock v-for="stock in stocks" :stock="stock"></stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'
import { mapGetters } from 'vuex';
export default {
  components: {
    stock: Stock
  },
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  }
}
</script>
