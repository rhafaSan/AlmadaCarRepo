<template>
  <router-view/>
  <div class="header">
    <p>Almada Car</p>
  </div>
  <div v-for="car in selectedCar" :key="car.id">
    <h4>Name: </h4>
    <p>{{car.name}}</p>

    <h4>Brand: </h4>
    <p>{{car.brand}}</p>

    <h4>Made in</h4>
    <p>{{car.manufacture_year}}</p>

    <h4>Model Year:</h4>
    <p>{{car.model_year}}</p>

    <h4>Sell date: </h4>
    <p>{{car.date_sale}}</p>
  </div>
</template>

<script>
import api from '@/services/config.js'
export default {
  name: 'ShowCar',
  data(){
    return{
      selectedCar: null,
    }
  },
  methods: {
    async getCar(){
      const response = await api.get(`/carro/${this.$route.params.id}`);
      this.selectedCar = response.data;
      console.log(response.data)
    },
  },
  mounted(){
    this.getCar();
  }
}
</script>

<style>

</style>