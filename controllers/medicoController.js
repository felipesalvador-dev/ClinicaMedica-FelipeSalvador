const prisma = require("../prismaClient");

const listar = async (req, res) => {
  const data = await prisma.medico.findMany({
    include: { especialidade: true },
  });
  return res.json(data);
};

const buscarPorId = async (req, res) => {
  const { id } = req.params;

  const data = await prisma.medico.findUnique({
    where: { id: Number(id) },
    include: { especialidade: true },
  });

  if (!data) return res.status(404).json({ erro: "Não encontrado" });

  return res.json(data);
};

const cadastrar = async (req, res) => {
  const novo = await prisma.medico.create({
    data: req.body,
  });

  return res.status(201).json(novo);
};

const atualizar = async (req, res) => {
  const { id } = req.params;

  const atualizado = await prisma.medico.update({
    where: { id: Number(id) },
    data: req.body,
  });

  return res.json(atualizado);
};

const deletar = async (req, res) => {
  const { id } = req.params;

  await prisma.medico.delete({
    where: { id: Number(id) },
  });

  return res.json({ msg: "Deletado" });
};

module.exports = { listar, buscarPorId, cadastrar, atualizar, deletar };