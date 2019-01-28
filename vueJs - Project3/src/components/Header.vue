<template>
 
  

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
         <router-link  tag="li" active-class="active" to="/" exact>
           <a>Stock trader</a>
         </router-link>
         <router-link  tag="li" active-class="active" to="/portfolio" exact>
          <a>Portfolio</a>
          </router-link>
        <router-link tag="li" active-class="active" to="/stocks" exact>
           <a>Stocks</a>
        </router-link>
      </ul>
      <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
       <ul class="nav navbar-nav navbar-right">
        <li @click="endDay()"><a href="#">End of day</a></li>
        <li @click="isDroppedDownOpen = !isDroppedDownOpen" class="dropdown" :class="{'open': isDroppedDownOpen}">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a @click="saveData" href="#">Save data</a></li>
            <li><a @click="fetchData" href="#">Load data</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
 





</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';
export default {
  data(){
    return{
      isDroppedDownOpen: false
    }
  },
  computed: {
    ...mapGetters([
      'funds',
      'stockPortfolio',
      'stocks'
    ])
  },
  methods: {
    ...mapActions([
      'randomizeStocks',
      'loadData'
    ]),
    endDay(){
       this.randomizeStocks();
    },
    saveData(){
      const data = {
        funds: this.funds, 
        stockPortfolio: this.stockPortfolio  ,
        stocks: this.stocks
      };
      this.$http.put('data.json', data);
    },
    fetchData(){
      this.loadData();
    }
  }
}
</script>
