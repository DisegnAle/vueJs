<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters</h1>
            </div>
        </div>
</template>

<script> 
    export default {
            directives: {
            'local-highlight': {
                bind(el, binding, vnode){
                     var delay = 0;
                    if(binding.modifiers['delayed']){
                        delay = 3000;
                    }
                    if(binding.modifiers['blink']){
                        let mainColor = binding.value.mainColor,
                            secondColor = binding.value.secondColor,
                            currentColor = mainColor;
                            setTimeout(() => {
                            setInterval(() => {
                                currentColor = (currentColor == secondColor) ? mainColor : secondColor;  
                                if(binding.arg==='background'){
                                    el.style.backgroundColor = currentColor;
                                }else{
                                    el.style.color = currentColor;
                                }
                            },binding.value.delay); 
                        }, delay);  
                    }else{
                        setTimeout(() => {              
                                if(binding.arg==='background'){
                                    el.style.backgroundColor = currentColor;
                                }else{
                                    el.style.color = currentColor;
                                }
                        }, delay);  
                    }
                    
                }
            },
            'change-color': {
                bind(el, binding){
                    // aggiungo da qui la funzione al click dell'elemento
                    /*el.onclick = function(){
                        // eseguo il valore come una funzione
                        binding.value();
                    };*/

                    // permetto all'elemento di ascoltare un qualsiasi evento
                    const eventType = binding.arg;
                    const fn = binding.value

                    // all'event listener passo il tipo di evento e la funzione da eseguire
                    el.addEventListener(eventType, fn);
                }
            }
        },
        
        methods: {
            clicked(){
                alert('I was clicked');
            }
        }
    }
</script>

<style>

</style>
