<template>
    <div class="container">
        <app-header></app-header>
        <transition name="slide" mode="out-in">
             <router-view></router-view>
        </transition>
       
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    export default {
        components: {
            appHeader : Header
        },
        created(){
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style>
    body{
        padding: 30px;
    }
    .slide-enter-active{
        animation: slide-in 700ms ease-out forwards;
    }
    .slide-leave-active{
        animation: slide-out 700ms ease-out forwards;
    }

    @keyframes slide-in{
        from{
            transform: translate-Y(-30px);
            opacity: 0;
        }
        to{
            transform: translate-Y(0px);
            opacity: 1;
        }
    }

     @keyframes slide-out{
        from{
            transform: translate-Y(0px);
            opacity: 1;
        }
        to{
            transform: translate-Y(-30px);
            opacity: 0;
        }
    }
</style>
