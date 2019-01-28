<template>
    <div class="progressBarOuter">
            <div class="progressBarInner" :style="{width: quoteCount/maxQuotes*100+'%'}"></div>
            {{quoteCount}} / {{maxQuotes}}
    </div>
</template>

<script>
    export default {
        props: [
            'maxQuotes',
            'quoteCount'
        ]
    }
</script>

<style>
   .progressBarOuter{
       width: 100%;
       height: 50px;
       border: 1px solid;
   }
   .progressBarInner{
           width: 0%;
           height: 100%;
           background: #2c2cfd;
   }
</style>
