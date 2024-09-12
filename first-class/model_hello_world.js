const connect = require('./db.js');
const Schema = connect.Schema; 

const helloWorldSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const HelloWorld = connect.model('HelloWorld', helloWorldSchema);

HelloWorld.create({ 
    name: 'Edson',
    message: 'Hello World!'
})

// 
module.exports = HelloWorld;