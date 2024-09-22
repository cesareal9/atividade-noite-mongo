const express = require('express');
const app = express();
const connectDB = require('./config/db');
const PORT = 5000;
const movies_routes = require('./routes/movies_route.js');
const directors_routes = require('./routes/directors_route.js');
const producers_routes = require('./routes/producers_route.js');

const via_cep = require('./middleware/via_cep.js');
app.use(express.json());

app.use('/movie', movies_routes);
app.use('/director', via_cep, directors_routes);
app.use('/producer', via_cep, producers_routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})