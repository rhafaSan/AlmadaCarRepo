<template>
  <div class="header">
    <p>Almada Car</p>
  </div>
  <div class="body">
    <div class="register-car">
      <p>Register car</p>
      <router-link to="/register">Register</router-link>
    </div>
        <div class="show-cars">
      <p>Show all cars</p>
      <router-link to="/show-all">Show All</router-link>
    </div>
        <div class="show-car">
      <p>Show a car</p>
      <router-link to="/show-car/">Show</router-link>
    </div>
        <div class="update-car">
      <p>Update a car registered</p>
      <router-link to="/update">Update</router-link>
    </div>
        <div class="delete-car">
      <p>Delete a car registered</p>
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

  .body{
    width: 100%;
    height: 100%;
    background-color: #f9f9f9;
    border: 1px solid #681bc0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }


</style>