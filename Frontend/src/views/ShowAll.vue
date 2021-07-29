<template>
<div>
  <router-view/>
  <div class="header">
    <p>Almada Car</p>
  </div>
<div class="list-div">

  <div v-for="car in this.cars" :key="car.id">
    <input type="radio" value="car.id" @click="getId(car.id)" name="radioOption" >
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

  <button @click="getCarById">ChooseCar</button>
  <button @click="goToDelete">Choose delete car</button>
  <button @click="goToUpdate">Choose update</button>
</div>
</div>

</template>

<script>
import api from '@/services/config.js';
export default {
  name: 'ShowAll',
  data(){
    return {
      idParam: null,
      cars: []
    }
  },
  methods: {
    async getAllCars(){
      const response = await api.get('/carro/');
      this.cars = response.data;
    },
    getId(id){
      this.idParam = id;
      console.log(this.idParam);
    },
    getCarById(){
      this.$router.push(`/show-car/${this.idParam}`);
    },
    goToDelete(){
      this.$router.push(`/delete/${this.idParam}`)
    },
    goToUpdate(){
      this.$router.push(`/update/${this.idParam}`);
    }
  },
  mounted(){
    this.getAllCars();
  }
}
</script>

<style>
.list-div{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 1%;
}

</style>