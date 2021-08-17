<template>
<div>
    <router-view/>
    <div class="header">
      <p>Almada Car</p>
    </div>
    <main v-for="people in selectedPeople" :key="people.id" class="body">
      <h4>Nome: </h4>
      <p>{{people.nome}}</p>

      <h4>Cargo: </h4>
      <p>{{people.cargo}}</p>

      <h4>Nascimento:</h4>
      <p>{{people.data_nascimento}}</p>

      <h4>Admissão:</h4>
      <p>{{people.data_entrada}}</p>

      <button @click="goBack">Voltar</button>

    </main>
</div>


</template>

<script>
import api from '@/services/config.js'
export default {
  name: 'ShowPeople',
  data(){
    return{
      selectedPeople: null,
    }
  },
  methods: {
    async getPeople(){
      const response = await api.get(`/${this.$route.params.id}`);
      this.selectedPeople = response.data.Funcionario;
      console.log(response.data)
    },
    goBack(){
      this.$router.go(-1)
    }
  },
  mounted(){
    this.getPeople();
  }
}
</script>

<style >
  .body{
    margin-right: auto;
    margin-left: auto;
    width: 50%;
  }

</style>