const express = require('express');
const app = express();
const connectDB = require('./config/db');
const PORT = 5000;
const books_routes = require('./routes/book_route.js');
const author_routes = require('./routes/author_route.js');

const via_cep = require('./middleware/via_cep.js');
app.use(express.json());

app.use('/books', books_routes);
app.use('/author', via_cep, author_routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})