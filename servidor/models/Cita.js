const mongoose = require('mongoose');
const CitaSchema = mongoose.Schema({
    planta:{
        type: String,
        require: true,
        trim: true,
    },
    usuario:{
        type: String,
        require: true,
        trim: true,
    },
    fecha:{
        type: Date,
        default: Date.now(),
    },
    hora:{
        type: Date,
        default: Date.now(),
    },
    inquietud:{
        type: String,
        require: true,
        trim: true,
    },
    proyecto:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proyecto'
    }
});

module.exports = mongoose.model('Cita', CitaSchema);