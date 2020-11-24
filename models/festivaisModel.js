const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let FestivaisSchema = new Schema({
    nome: {type: String, required: true, max: 100},
    valor_ingresso: {type: Number, required: true},
    date:{type:Date, required: true, }
});
        const eventos =  mongoose.model('festivais', FestivaisSchema);
module.exports = eventos;