const mongoose = require('mongoose');

const conn = "mongodb+srv://Edson:ezZ92XfwQyPQkYHi@cluster0.th8hv.mongodb.net/teste"

async function connect() {
   await mongoose.connect(conn);
}

connect()
.then(() => {
    console.log("Conectado ao MongoDB");
}).catch((err) => {
    console.log(err);
})

module.exports = mongoose

//banco sempre conecta ao modelo, sempre importa em todos os modelos
