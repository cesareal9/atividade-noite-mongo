const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://Edson:ezZ92XfwQyPQkYHi@cluster0.th8hv.mongodb.net/books');    
        console.log('MongoDB conectado');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);

    }
};

connectDB();

export default mongoose;