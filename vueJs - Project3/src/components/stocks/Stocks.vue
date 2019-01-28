<template>
  <div>
    <h1>Stocks component</h1>
    <stock v-for="stock in stocks" :stock="stock"></stock>
  </div>
</template>

<script>
  import Stock from './Stock.vue'
  export default {
      components: {
        stock: Stock
      },
      computed: {
        stocks(){
          return this.$store.getters.stocks;
        }
      }
  }
</script>
