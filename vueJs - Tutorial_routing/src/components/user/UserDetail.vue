<template>
    <div>
        <h3>Some User Details</h3>
        <p>ID: {{$route.params.id}}</p>
        <router-link 
            tag="button" 
            v-bind:to="link"
            class="btn btn-primary">Edit user</router-link>
    </div>
</template>

<script>
export default {
   data(){
       return{
           link: {
               name:'userEdit', 
               params: {
                   id: this.$route.params.id
                   }, 
               query: {
                   locale:'en', q: 100
                   },
                hash: '#data'  
           }
       }
   },
   beforeRouteEnter(to,from,next){
       next();
   },
   beforeRouteLeave(to,from, next){
       if(confirm('Are you sure?')){
           next();
       }else{
           next(false);
       }
   }
};
</script>