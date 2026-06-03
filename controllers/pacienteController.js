const prisma = require("../prismaClient");

const listar = async (req, res) => {
  const data = await prisma.paciente.findMany();
  return res.json(data);
};

const buscarPorId = async (req, res) => {
  const { id } = req.params;

  const data = await prisma.paciente.findUnique({
    where: { id: Number(id) },
  });

  if (!data) return res.status(404).json({ erro: "Não encontrado" });

  return res.json(data);
};

const cadastrar = async (req, res) => {
  const { nome, cpf, dataNascimento, telefone, email, endereco } = req.body;

  const novo = await prisma.paciente.create({
    data: {
      nome,
      cpf,
      dataNascimento: new Date(dataNascimento),
      telefone,
      email,
      endereco,
    },
  });

  return res.status(201).json(novo);
};

const atualizar = async (req, res) => {
  const { id } = req.params;

  const atualizado = await prisma.paciente.update({
    where: { id: Number(id) },
    data: req.body,
  });

  return res.json(atualizado);
};

const deletar = async (req, res) => {
  const { id } = req.params;

  await prisma.paciente.delete({
    where: { id: Number(id) },
  });

  return res.json({ msg: "Deletado" });
};

module.exports = { listar, buscarPorId, cadastrar, atualizar, deletar };