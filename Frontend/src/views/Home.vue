<template>
  <div class="header">
    <p>Almada Funcionarios</p>
  </div>
  <div class="body">
    <div class="register-people">
      <p>Register people</p>
      <router-link to="/register">Register</router-link>
    </div>
        <div class="show-peoples">
      <p>Show all peoples</p>
      <router-link to="/show-all">Show All</router-link>
    </div>
        <div class="show-people">
      <p>Show a people</p>
      <router-link to="/show-people/">Show</router-link>
    </div>
        <div class="update-people">
      <p>Update a people registered</p>
      <router-link to="/update">Update</router-link>
    </div>
        <div class="delete-people">
      <p>Delete a people registered</p>
      <router-link to="/delete">Delete</router-link>
    </div>
  </div>
     <!-- <router-link to="/">Home</router-link> -->

  <!-- <button @click="goAbout()" >About</button>
  <router-view>
    <About/>
    
  <router-view/> -->
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped>
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

  .body{
    width: 40%;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 10%;
    background-color: #f9f9f9;
    border: 1px solid #681bc0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }


</style>