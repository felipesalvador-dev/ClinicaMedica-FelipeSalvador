const prisma = require("../prismaClient");

const listar = async (req, res) => {
  const data = await prisma.especialidade.findMany();
  return res.json(data);
};

const buscarPorId = async (req, res) => {
  const { id } = req.params;

  const data = await prisma.especialidade.findUnique({
    where: { id: Number(id) },
  });

  return res.json(data);
};

const cadastrar = async (req, res) => {
  const novo = await prisma.especialidade.create({
    data: req.body,
  });

  return res.status(201).json(novo);
};

const atualizar = async (req, res) => {
  const { id } = req.params;

  const atualizado = await prisma.especialidade.update({
    where: { id: Number(id) },
    data: req.body,
  });

  return res.json(atualizado);
};

const deletar = async (req, res) => {
  const { id } = req.params;

  await prisma.especialidade.delete({
    where: { id: Number(id) },
  });

  return res.json({ msg: "Deletado" });
};

module.exports = { listar, buscarPorId, cadastrar, atualizar, deletar };