<template>
<div>

  <div class="header">
    <p>Almada Funcionarios</p>
  </div>
  <div class="body">
    <div class="register-people">
      <p>Cadastrar Funcionario</p>
      <router-link to="/register">Cadastrar</router-link>
    </div>
    
    <div class="show-peoples">
      <p>Mostrar Funcionarios</p>
      <router-link to="/show-all">Mostrar todos</router-link>
    </div>
    
    <div class="update-people">
      <p>Atualizar Funcionario</p>
      <router-link to="/update">Atualizar</router-link>
    </div>
    
    <div class="delete-people">
      <p>Deletar funcionario</p>
      <router-link to="/delete">Deletar</router-link>
    </div>
  </div>
</div>
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