<template>
<div>
  <router-view/>
  <div class="header">
    <p>Almada Car</p>
  </div>
  <div>
    <p>Deseja deletar esse funcionário?</p>

    <button @click="deletePessoa" >Deletar</button>
    <button @click="this.$router.go(-1)">Voltar</button>


  </div>
</div>
</template>

<script>
import api from '@/services/config.js'

export default {
  name: 'Delete',
  methods: {
    async deletePessoa(){
      const response = await api.delete(`/${this.$route.params.id}`);
      alert(response.data.message);
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>