<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-body quote">
                <slot></slot>
                <div class="deleteQuote">x</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      props: [
          'quote'
      ]
    }
</script>

<style>
    .panel-body{
        font-family: 'Arizonia', cursive;
        font-size: 24px;
        color: #6e636e;
    }
    .quote{
        cursor: pointer;
    }
    .deleteQuote{
        display: none;
    }
    .quote:hover{
        background: #ffe2ff;
    }
     .quote:hover .deleteQuote{
         display: block;
     }


</style>
