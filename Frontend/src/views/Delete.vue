<template>
  <router-view/>
  <div class="header">
    <p>Almada Car</p>
  </div>
  <div>
    <p>Want to delete this car?</p>

    <button @click="deleteCar" >Delete</button>
  </div>
</template>

<script>
import api from '@/services/config.js'

export default {
  name: 'Delete',
  methods: {
    async deleteCar(){
      const response = await api.delete(`/carro/${this.$route.params.id}`);
      alert(response.data);
    }
  }
}
</script>

<style>

</style>