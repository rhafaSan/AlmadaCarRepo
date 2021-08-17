<template>
<div>
    <router-view/>
    <div class="header">
      <p>Almada Car</p>
    </div>
    <div class="div-form" v-for="people of selectedPeople" :key="people.id" >
      <form  @submit="updatePeople">
        <label for="">Nome:</label>
      <input type="text" v-model="people.nome" >

      <label for="">Cargo:</label>
      <select name="" id="" v-model="people.cargo">
        <option value="Operario">Operário</option>
        <option value="Trainee">Trainee</option>
        <option value="Gerente">Gerente</option>
        <option value="CTO">CTO</option>

      </select>

      <label for="">Data nascimento:</label>
      <input type="date" v-model="people.data_nascimento" >

      <label for="">Entrada na empresa:</label>
      <input type="date" v-model="people.data_entrada" >


        <button type="submit">Update</button>
        <button @click="this.$router.go(-1)">Voltar</button>

      </form>
    </div>
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
    async getPeople(){
      const response = await api.get(`/${this.$route.params.id}`);
      // console.log(data);
      this.selectedPeople = response.data.Funcionario;
      console.log(this.selectedPeople[0]);
      console.log(response.data);
    },
    async updatePeople(e){
      e.preventDefault()
      const response = await api.put(`/${this.$route.params.id}`, this.selectedPeople[0]);
      console.log(this.selectedPeople[0]);
      console.log(response.data);
      this.$router.push('/show-all')
    }
  },
  mounted(){
    this.getPeople()
  }
}
</script>

<style>

  .div-form{
   display: flex;
    flex-direction: column;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

</style>