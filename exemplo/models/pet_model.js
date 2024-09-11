const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  endereco: { type: String, required: true },
  telefones: [String],
});

const Cliente = mongoose.model('Cliente', petSchema);
module.exports = Cliente;