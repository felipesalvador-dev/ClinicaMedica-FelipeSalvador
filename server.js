const express = require("express");

const app = express();

app.use(express.json());

// Rotas
const pacienteRoutes = require("./routes/pacienteRoutes");
const especialidadeRoutes = require("./routes/especialidadeRoutes");
const medicoRoutes = require("./routes/medicoRoutes");
const consultaRoutes = require("./routes/consultaRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");

app.use("/pacientes", pacienteRoutes);
app.use("/especialidades", especialidadeRoutes);
app.use("/medicos", medicoRoutes);
app.use("/consultas", consultaRoutes);
app.use("/usuarios", usuarioRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});