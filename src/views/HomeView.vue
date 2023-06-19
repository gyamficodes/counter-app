<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="counter">{{ $store.state.counter }}</div>
    <div class="cent">
      <div class="buttons">
        <button @click="$store.commit('decreaseCounter')">-</button>
        <button @click="$store.commit('increaseCounter')">+</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "HomeView",
  components: {},
  data(){
    return{

    }
  },
  methods: {
  
  },
  computed: {},
  mounted(){},
  created(){},
};
</script>
<style lang="scss">
@import'../assets/Sass/style.scss';
</style>
