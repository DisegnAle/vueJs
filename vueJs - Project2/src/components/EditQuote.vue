<template>
    <div class="form">
            <textarea class="form-control" name="" id="" cols="30" rows="10" v-model="quoteValue"></textarea>
            <button  type="button" class="btn btn-primary" @click.prevent="submitQuote" >Add quote</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                quoteValue: ''
            }
        },
       computed: {
           submitQuote(){
               this.$emit('quoteAdded', this.quoteValue);
               this.quoteValue = '';
           }
       }
    }
</script>

<style>

    .form{
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 200px 50px;
        grid-row-gap: 10px;
        padding: 20px;

    }
    textarea{
       grid-column: 2/3;
       grid-row: 1/2;
    }
    button{
        grid-row: 2/3;
        grid-column: 2/3;
    }
</style>
