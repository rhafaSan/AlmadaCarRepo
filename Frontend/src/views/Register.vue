<template>
  <div class="header">
    <p>Almada Car</p>
  </div>
  <div class="div-form" @submit="registerCar">
    <form action="">
      <label for="">Name:</label>
      <input type="text" v-model="this.nameCar">

      <label for="">Brand:</label>
      <input type="text" v-model="this.brand" >

      <label for="">Made in:</label>
      <input type="text" v-model="this.manufacture_year" >

      <label for="">Model year:</label>
      <input type="text" v-model="this.model_year" >

      <label for="">Sell date:</label>
      <input type="text" v-model="this.date_sale" >

      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import api from '@/services/config.js';

export default {
  name: "Register",
  data(){
    return{
      nameCar: null,
      brand: null,
      manufacture_year: null,
      model_year: null,
      date_sale: null
    }
  },
  methods:{
    async registerCar(e){
      e.preventDefault();
      const data = {
        nomeCarro: this.nameCar,
        marca: this.brand,
        feito: this.manufacture_year,
        modelo: this.model_year,
        vendido: this.date_sale
      }
      console.log(data);

      // const dataJson = JSON.stringify(data);

      const response = await api.post('carro/', data);
      if(response.status === 200) {
        this.$router.push('/show-all')
      }
    
      console.log(response.status);
    }
  }
  
}

</script>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .header{
    border: 1px solid #000;
    height: 90px;
    background-color: #000;
  }

  .header p{
    text-align: center;
    color: #fff;
    padding-top:20px;
    font-size: 35px;
    font-weight: 700;
  }

  .div-form form{
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  button{
    width: 30%;
    height: 35px;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
  }

</style>