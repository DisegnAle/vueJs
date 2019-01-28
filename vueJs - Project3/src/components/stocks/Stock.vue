<template>


  <div class="col-sm-6 col-md-4">
      <div class="panel panel-success">
        <div class="panel-heading">
          <h3 class="panel-title">
            {{ stock.name }}
            <small>(Price:  {{ stock.price }})</small>
          </h3>
        </div>
        <div class="panel-body">
          <div class="pull-left">
            <input v-model="quantity" type="number" class="form-control" placeholder="quantity">
          </div>
          <div class="pull-right">
           <button 
            :disabled="quantity <= 0 || insufficientFunds"
            @click="buyStock" 
            class="btn btn-success">{{insufficientFunds? 'Insufficient funds' : 'Buy'}}</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        props: ['stock'],
        data(){
            return {
                quantity: 0,
            }
        },
        methods: {
            buyStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.$store.dispatch('buyStock',order);
                this.quantity = 0;
            }
        },
        computed: {
            funds(){
                return this.$store.getters.funds
            },
            insufficientFunds(){
                return (this.stock.price*this.quantity)>this.funds
            }
        }
    }
</script>

