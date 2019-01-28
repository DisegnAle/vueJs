<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
            </div>    
             <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                 <!-- selezione dinamica dell'animazione --> 
                <select name="" id="" v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select> 
                <!-- selezione dinamica dell'animazione -->  
             </div>     
             

             <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">     
               <button class="btn btn-primary" @click="show = !show">Show alert</button>
             </div>


             <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">  
               <transition :name="alertAnimation" mode="out-in">
                    <div class="alert alert-info" v-if="show" key="info">This is some info</div>
                     <div class="alert alert-warning" v-else key="warning">This is some info</div>
               </transition>
               <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show">This is some info</div>
               </transition>
                <transition 
                    name="slide" 
                    type="animation"
                    enter-active-class="animated bounce">
                    <div class="alert alert-info" v-if="show">This is some info</div>
               </transition>
             </div>

             <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"> 
                 <button class="btn btn-primary" @click="load = !load">Load/Remove element</button>
                 <br><br>
                 <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"
                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled">
                     <div v-if="load" style="width:100px; height:100px; background-color:lightgreen;"></div>
                 </transition>
             </div>  

            <hr>
          
            <!-- lista -->
             <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"> 
                   <button @click="addItem" class="btn btn-primary">Add item</button>
                      <br><br>
                 <ul class="list-group">
                     <transition-group name="slide">
                        <li 
                            class="list-group-item" 
                            v-for="(number,index) in numbers"
                            @click="removeItem(index)"
                            style="cursor:pointer"
                            :key="number">
                            {{number}}
                        </li>
                      </transition-group>  
                 </ul>
             </div>      
             <!-- lista -->        
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data(){
          return {
            show: false,
            alertAnimation: 'fade',
            load: true,
            elementWidth: 100,
            numbers: [1,2,3,4,5]
          }
      },
      methods: {
          beforeEnter(el){
            this.elementWidth = 100;
            el.style.width = this.elementWidth + 'px';
          },
          enter(el,done){
            let round = 1;
            const interval = setInterval(()=>{
               el.style.width = this.elementWidth + (round*10) + 'px';
               round++;  
               if(round>20){
                    clearInterval(interval);
                    done();
               } 
            }, 20);     
          },
          afterEnter(el){

          },
          enterCancelled(el){

          },
          beforeLeave(el){
            this.elementWidth = 300;
            el.style.width = this.elementWidth+'px';
          },
          leave(el,done){
            let round = 1;
            const interval = setInterval(()=>{
               el.style.width = this.elementWidth - (round*10) + 'px';
               round++;  
               if(round>20){
                   clearInterval(interval);
                    done();
               } 
            }, 20);   
          },
          afterLeave(el){

          },
          leaveCancelled(el){

          },
          addItem(){
            const pos = Math.floor(Math.random()*this.numbers.length);
            this.numbers.splice(pos, 0 , this.numbers.length+1);    
          },
          removeItem(index){
            this.numbers.splice(index, 1);
          }
      }
    }
</script>

<style>
    div,button{
        margin-bottom: 20px;
    }
    .fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity 1s;
    }
    .fade-leave-active{
        transition: opacity 1s;
        opacity: 0;
    }

    .fade-leave{
        
    }

    .slide-enter{
        opacity: 0;
    }
    .slide-enter-active{
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }
    .slide-leave-active{
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }
    .slide-leave{

    }

    /* IMPORTANTE */
    .slide-move{
        transition: transform 1s;
    }

    @keyframes slide-in {
        from{
            transform: translateY(20px);
        }
        to{
            transform: translateY(0);
        }
    }

     @keyframes slide-out {
        from{
            transform: translateY(0);
        }
        to{
            transform: translateY(20px);
        }
    }

</style>
