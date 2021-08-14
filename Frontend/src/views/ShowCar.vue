<template>
  <router-view/>
  <div class="header">
    <p>Almada Car</p>
  </div>
  <main v-for="people in selectedPeople" :key="people.id">
    <h4>Nome: </h4>
    <p>{{people.nome}}</p>

    <h4>Cargo: </h4>
    <p>{{people.cargo}}</p>

    <h4>Nascimento:</h4>
    <p>{{people.nascimento}}</p>

    <h4>Admissão:</h4>
    <p>{{people.entrada}}</p>

    <button @click="this.$router.go(-1)">Voltar</button>

  </main>


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
  },
  mounted(){
    this.getPeople();
  }
}
</script>

<style>

</style>