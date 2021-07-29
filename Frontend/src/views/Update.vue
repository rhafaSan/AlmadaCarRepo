<template>
  <router-view/>
   <div class="header">
    <p>Almada Car</p>
  </div>
  <div class="div-form" @submit="updateCar" >
    <form action="">
      <label for="">Name:</label>
      <input type="text" value={{this.name}}>

      <label for="">Brand:</label>
      <input type="text">

      <label for="">Made in:</label>
      <input type="text">

      <label for="">Model year:</label>
      <input type="text">

      <label for="">Sell date:</label>
      <input type="text">

      <button>Update</button>
    </form>
  </div>
</template>

<script>
import api from '@/services/config.js'

export default {
  name: 'Update',
  data(){
    return{
      selectedCar: null,
      name: null
    }
  },
  methods: {
    async getCar(){
      const response = await api.get(`/carro/${this.$route.params.id}`);
      const data = JSON.parse(response.data)
      this.name = data.name
      console.log(this.name)
      console.log(response.data)
    },
  },
  mounted(){
    this.getCar()
  }
}
</script>

<style>

</style>