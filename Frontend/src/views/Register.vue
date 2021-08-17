<template>
<div>
  <div class="header">
    <p>Almada Car</p>
  </div>
  <div class="div-form" >
    <form @submit="registerPeople">
      <label for="">Nome:</label>
      <input type="text" v-model="this.nome">

      <label for="">Cargo:</label>
      <select name="" id="" v-model="this.cargo">
        <option value="Operario">Operário</option>
        <option value="Trainee">Trainee</option>
        <option value="Gerente">Gerente</option>
        <option value="CTO">CTO</option>

      </select>

      <label for="">Data nascimento:</label>
      <input type="date" v-model="this.nascimento" >

      <label for="">Entrada na empresa:</label>
      <input type="date" v-model="this.entrada" >

      <button type="submit">Cadastrar</button>
    <button @click="this.$router.go(-1)">Voltar</button>

    </form>
  </div>
</div>
</template>

<script>
import api from '@/services/config.js';

export default {
  name: "Register",
  data(){
    return{
      nome: null,
      cargo: null,
      nascimento: null,
      entrada: null,
    }
  },
  methods:{
    async registerPeople(e){
      e.preventDefault();
      const data = {
        nome: this.nome,
        cargo: this.cargo,
        data_nascimento: this.nascimento,
        data_entrada: this.entrada,
      }
      console.log(data);

      // const dataJson = JSON.stringify(data);

      const response = await api.post('/', data);
      if(response.status === 200) {
        this.$router.push('/show-all')
      }
    
      console.log(response.status);
    }
  }
  
}

</script>

<style  >
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