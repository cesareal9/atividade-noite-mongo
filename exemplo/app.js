const express = require('express');
const connectDB = require('./config/db');
const PORT = 5000;

const cliente_routes = require('./routes/cliente_route.js');

const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(express.json());

// Rotas
app.use('/clientes', cliente_routes);


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});