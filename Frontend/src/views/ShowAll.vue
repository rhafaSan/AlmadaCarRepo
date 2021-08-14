<template>
<div>
  <router-view/>
  <div class="header">
    <p>Almada Car</p>
  </div>
<div class="list-div">
  <div class="filters">
    <label for="">Filtre por cargos:</label>
    <input type="text" v-model="this.cargo">
    <button @click="goFilter">Filtrar</button>

    <label for="">Filtre por quantidade</label>
    <input type="text" v-model="this.quantidade">
    <button @click="filterQuantity">Filtrar</button>
  </div>
  <div v-for="people in this.peoples" :key="people.id" class="show-all">
    <input type="radio" value="people.id" @click="getId(people.id)" name="radioOption" >
    <h4>Nome: </h4>
    <p>{{people.nome}}</p>

    <h4>Cargo: </h4>
    <p>{{people.cargo}}</p>

    <h4>Nascimento</h4>
    <p>{{people.nascimento}}</p>

    <h4>Admissão:</h4>
    <p>{{people.entrada}}</p>
  </div>

<div>
  <button @click="getCarById">Ver funcionario</button>
  <button @click="goToDelete">Deletar funcionario</button>
  <button @click="goToUpdate">Atualizar funcionario</button>
</div>
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
      peoples: [],
      cargo: null,
      quantidade: null
    }
  },
  methods: {
    async getAllPeoples(){
      const response = await api.get('/');
      this.peoples = response.data.Funcionarios;
      console.log(this.peoples);
    },
    getId(id){
      this.idParam = id;
      console.log(this.idParam);
    },
    getCarById(){
      this.$router.push(`/${this.idParam}`);
    },
    goToDelete(){
      this.$router.push(`/delete/${this.idParam}`)
    },
    goToUpdate(){
      this.$router.push(`/update/${this.idParam}`);
    },
    async goFilter(){
      const res = await api.get(`/cargo/${this.cargo}`)
      console.log(res.data);
    },
    async filterQuantity(){
      const res = await api.get(`/quantidade/${this.quantidade}`);
      console.log(res.data)
    }
  },
  mounted(){
    this.getAllPeoples();
  }
}
</script>

<style >
.list-div{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 1%;
}
.show-all{
  border: 1px solid #000;
}

</style>