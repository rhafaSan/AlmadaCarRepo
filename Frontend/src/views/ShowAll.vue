<template>
<div>
  <router-view/>
  <div class="header">
    <p>Almada Funcionarios</p>
  </div>
<div class="list-div">
  <div class="filters">
    <div class="offices">
      <label for="">Filtre por cargos:</label>
      <input type="text" v-model="this.cargo">
      <button @click="filtrarCargo">Filtrar</button>
    </div>
    <br>
    <div class="quantitys">
      <label for="">Filtre por quantidade</label>
      <input type="text" v-model="this.quantidade">
      <button @click="filtrarQuantidade">Filtrar</button>
    </div>
    <div class="clean">
      <label for="">Limpar filtros</label>
      <button @click="limpaFiltros" >Limpar</button>
    </div>
  </div>
  <div class="show-all">
      <div v-for="funcionario in this.funcionarios" :key="funcionario.id" class="unique" >
        <input type="radio" value="funcionario.id" @click="getId(funcionario.id)" name="radioOption" >
        <h4>Nome: </h4>
        <p>{{funcionario.nome}}</p>

        <h4>Cargo: </h4>
        <p>{{funcionario.cargo}}</p>

        <h4>Data de Nascimento</h4>
        <p>{{funcionario.data_nascimento }}</p>

        <h4>Data de Admissão:</h4>
        <p>{{funcionario.data_entrada}}</p>
      </div>


  </div>

<div class="btn-div">
  <button @click="getFuncionario">Ver funcionario</button>
  <button @click="deleteFuncionario">Deletar funcionario</button>
  <button @click="atualizeFuncionario">Atualizar funcionario</button>
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
      funcionarios: [],
      cargo: null,
      quantidade: null,
      filterOffice: false,
      filtrarQuantidades: false
    }
  },
  methods: {
    async getFuncionarios(){
      const response = await api.get('/');
      this.funcionarios = response.data.Funcionarios;
      console.log(this.funcionarios);
    },
    getId(id){
      this.idParam = id;
      console.log(this.idParam);
    },
    getFuncionario(){
      this.$router.push(`/${this.idParam}`);
    },
    deleteFuncionario(){
      this.$router.push(`/delete/${this.idParam}`)
    },
    atualizeFuncionario(){
      this.$router.push(`/update/${this.idParam}`);
    },
    limpaFiltros(){
      this.cargo = '';
      this.quantidade = '';
    }
    ,
    async filtrarCargo(){
      try{
        const res = await api.get(`/cargo/${this.cargo}`)
        console.log(res.data.Funcionario);
        this.filterOffice = true
        this.funcionarios = res.data.Funcionario
        console.log(this.filterOffice);
      }catch(e){
        alert(e.response.data.message)
      }
    },
    async filtrarQuantidade(){
      try{
        const res = await api.get(`/quantidade/${this.quantidade}`);
        console.log(res.data.Funcionarios);
        this.funcionarios = res.data.Funcionarios;

      }catch(e){
        alert(e.response.data.message)
      }    
    }
  },
  mounted(){
    this.getFuncionarios();
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.unique{
  display: flex;
  border: 1px solid #000;
  flex-direction: column;
}

.filters{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 10vh;
  margin-bottom: 1%;
  margin-bottom: 5%;
}

.offices {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.quantitys{
  display: flex;
  flex-direction: column;
  text-align: center;
}

input[type=text]{
  width: 150px;
  margin: 0 auto 0 auto;
}

.btn-div{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

button:hover{
  cursor: pointer;
}

.clean{
  display: flex;
  flex-direction: column;
  text-align: center;
}

.clean button{
  width: auto;
}

</style>