import client from "../../../db_config";

async function createTables() {
  await client.connect();

  await client.query("CREATE TYPE FuncionarioCargo AS ENUM('Operario', 'Trainee', 'Gerente', 'CTO')");

  await client.query(
    "CREATE TABLE funcionario( id serial PRIMARY KEY UNIQUE NOT NULL, nome  VARCHAR(50) NULL, cargo FuncionarioCargo NULL, data_nascimento TIMESTAMP NULL, data_entrada TIMESTAMP NULL)"
  )

 

  await client.end();
  console.log("Tabela funcionario, e Type Cargo Criados!");
}

createTables();



