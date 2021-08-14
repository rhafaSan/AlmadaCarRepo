<template>
  <router-view/>
   <div class="header">
    <p>Almada Car</p>
  </div>
  <div class="div-form" v-for="people of selectedPeople" :key="people.id" >
    <form action="" @submit="updateCar">
      <label for="">Name:</label>
      <input type="text" v-model="this.people">

      <label for="">Brand:</label>
      <input type="text">

      <label for="">Made in:</label>
      <input type="text">

      <label for="">Model year:</label>
      <input type="text">

      <label for="">Sell date:</label>
      <input type="text">

      <button>Update</button>
      <button @click="this.$router.go(-1)">Voltar</button>

    </form>
  </div>
</template>

<script>
import api from '@/services/config.js'

export default {
  name: 'Update',
  data(){
    return{
      selectedPeople: [],
      name: null
    }
  },
  methods: {
    async getCar(){
      const response = await api.get(`/${this.$route.params.id}`);
      // console.log(data);
      this.selectedPeople = response.data.Funcionario;
      console.log(this.selectedPeople);
      console.log(response.data);
    },
  },
  mounted(){
    this.getCar()
  }
}
</script>

<style>

</style>