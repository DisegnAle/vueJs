<template>
    <div class="container">
        <app-header :max-quotes="maxQuotes" :quote-count="quotes.length"></app-header>
        <app-edit-quote @quoteAdded="newQuote"></app-edit-quote>
       <app-quotes-list :quotes="quotes" @quoteDeleted="deleteQuote"></app-quotes-list>
    </div>
</template>

<script>
   import Header from './components/Header.vue';
   import QuotesList from './components/QuotesList.vue';
   import EditQuote from './components/EditQuote.vue';
    export default {
        data(){
            return {
                maxQuotes: 10,
                quotes: ['Just a quote to see something']
            }
        },
        methods:{
            newQuote(quote){
                if(this.quotes.length>=this.maxQuotes){
                    alert("Maximum number of quotes reached");
                }else{
                    this.quotes.push(quote);
                }
                
            },
            deleteQuote(index){
                this.quotes.splice(index, 1);
            }
        },
        components: {
            appQuotesList: QuotesList,
            appEditQuote: EditQuote,
            appHeader: Header,
        }
    }
</script>

<style>
</style>
