<template>  
    <div>
        <h1>The User Page</h1>
        <br>
        <button @click="navigateToHome" class="btn btn-primary">Go to home</button>  

        <router-view></router-view>
    </div>
</template>

<script>
export default {
  methods: {
    navigateToHome() {
      // posso passare anche solo il percorso
      this.$router.push("/");
    }
  }
};
</script>