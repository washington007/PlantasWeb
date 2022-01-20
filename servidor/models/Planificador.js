const mongoose = require('mongoose');
const PlanificadorSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        trim: true,
    },
    cantidad:{
        type: Number,
        require: true,
        trim: true,
    },
    categoria:{
        type: String,
        require: true,
        trim: true,
    },
    usuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

module.exports = mongoose.model('Planificador', PlanificadorSchema);