<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text | to-lowercase}}</p>
                <p>Reverse text: {{ text | to-reverse}}</p>
                <p>Count text words: {{ text | word-counter}}</p>

                <input type="text" v-model="filterText">

                <ul>
                    <li v-for="fruit in filteredFruits">{{fruit}}</li>
                </ul>
                <hr>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from './List.vue';
    import {fruitMixin} from './fruitMixin';
    export default {
        mixins:[fruitMixin],
        data(){
            return{
                text: 'Hello there',
            }
        },
        filters: {
            // ogni filter prende un argomento come valore
            'to-uppercase' : function(value){
                return value.toUpperCase();
            },
            'to-reverse': function(value){
                return value.split("").reverse().join("");
            }
        },
        components: {
            appList: List
        }
    }
</script>

<style>

</style>
