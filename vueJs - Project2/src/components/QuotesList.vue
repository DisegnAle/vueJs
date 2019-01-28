<template>
   <div class="row quotesGrid">
           <app-quote  v-for="(quote, index) in quotes" :quote="quote" @click.native="deleteQuote(index)"> {{quote}} </app-quote>
   </div>

   
</template>

<script>
   import Quote from './Quote.vue';
    export default {
        components: {
            appQuote: Quote
        },
        props: [
            'quotes'
        ],
        methods: {
            deleteQuote(index){
                this.$emit('quoteDeleted', index);
            }
        }
    }
</script>

<style>
    .quotesGrid{
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 20px;
    }
</style>
