import express from "express";
import client from "../../db_config";

export async function Post(req, res) {
  const { nome, cargo, data_nascimento, data_entrada } = req.body;
  const registerFuncionario =
    "INSERT INTO funcionario ( nome, cargo, data_nascimento, data_entrada) VALUES ($1,$2,$3,$4)";

  await client.query(registerFuncionario, [
    nome, cargo, data_nascimento, data_entrada
  ]);
  return res.status(200).json({message: "Funcionário cadastrado com sucesso!"});
}

export async function GetAll(req, res) {
  try {
    const listAllFuncionarios = "SELECT * FROM funcionario;";

    const funcionarios = await client.query(listAllFuncionarios);
    if (
      funcionarios.rows.length == 0
    )
      return res.status(404).json({ message: "Não existe nenhum correspondente" });

    return res.status(200).json({ Funcionarios: funcionarios.rows });
  } catch (error) {
    return res.status(400).json({ message: "Não existe nenhum correspondente" });
  }
}

export async function GetById(req, res) {
  try {
    const { id } = req.params;

    const listFuncionario = "SELECT * FROM funcionario WHERE id = $1;";
    const funcionario = await client.query(listFuncionario, [id]);
    if (
      funcionario.rows.length == 0
    )
      return res.status(404).json({ message: "Não existe nenhum correspondente" });

    return res.status(200).json({ Funcionario: funcionario.rows });
  } catch (error) {
    return res.status(400).json({ message: "Não existe nenhum correspondente" });
  }
}

export async function GetByoffice(req, res) {
  try {
    const { cargo } = req.params;

    const listFuncionario = "SELECT * FROM funcionario WHERE cargo = $1;";
    const funcionario = await client.query(listFuncionario, [cargo]);
    if (
      funcionario.rows.length == 0
    )
      return res.status(404).json({ message: "Não existe nenhum correspondente" });

    return res.status(200).json({ Funcionario: funcionario.rows });
  } catch (error) {
    return res.status(400).json({ message: "Não existe nenhum correspondente" });
  }
}

export async function GetByQtd(req, res) {
  try {
    const {qtd} = req.params
    const listAllFuncionarios = "SELECT * FROM funcionario;";

    const funcionarios = await client.query(listAllFuncionarios);
    if (
      funcionarios.rows.length == 0
    )
      return res.status(404).json({ message: "Não existe nenhum correspondente" });
    let FuncionariosQuantidade = [];
    for (let i = 0; i < qtd; i++)
      FuncionariosQuantidade.push(funcionarios.rows[i])

    return res.status(200).json({ Funcionarios: FuncionariosQuantidade });
  } catch (error) {
    return res.status(400).json({ message: "Não existe nenhum correspondente" });
  }
}

export async function Update(req, res) {
  const { nome, cargo, data_nascimento, data_entrada } = req.body;
  const {id} = req.params
  const updateFuncionario =
    "UPDATE funcionario SET  nome = $1, cargo = $2, data_nascimento = $3, data_entrada = $4 WHERE id = $5";

  await client.query(updateFuncionario, [
    nome, cargo, data_nascimento, data_entrada, id
  ]);
  return res.status(200).json({message: "Funcionário Atualizado com sucesso!"});
}

export async function Delete(req, res) {
  try {
    const { id } = req.params;

    const listFuncionario = "SELECT * FROM funcionario WHERE id = $1;";
    const funcionario = await client.query(listFuncionario, [id]);
    if (
      funcionario.rows.length == 0
    )
      return res.status(404).json({ message: "Não existe nenhum correspondente" });


     const deleteFuncionario = "DELETE FROM funcionario WHERE id = $1;"
     await client.query(deleteFuncionario, [id]);
    return res.status(200).json({ Message: "Funcionario deletado com sucesso!" });
  } catch (error) {
    return res.status(400).json({ message: "Não existe nenhum correspondente" });
  }
}