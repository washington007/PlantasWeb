const mongoose = require('mongoose');
const CotizadorSchema = mongoose.Schema({
    tipo:{
        type: String,
        require: true,
        trim: true,
    },
    origen:{
        type: String,
        require: true,
        trim: true,
    },
    year:{
        type: Date,
        default: Date,
    },
    insumos:{
        type: String,
        require: true,
        trim: true,
    },
    extra:{
        type: String,
        require: true,
        trim: true,
    },
    proyecto:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Proyecto'
    }
});

module.exports = mongoose.model('Cotizador', CotizadorSchema);