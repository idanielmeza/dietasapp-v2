const {Schema,model} = require('mongoose');

const usuarioSchema = new Schema({

    nombre: {
        type: String,
        required: [true,'El nombre es obligatorio']
    },
    email: {
        type: String,
        required: [true,'El correo es obligatorio'],
        unique: true
    },
    picture:{
        type: String,
        required: false
    },
    uid:{
        type: String,
        required: [true,'El uid es obligatorio'],
    },

    estado: {
        type: Boolean,
        default: true
    },
    provider:{
        type: String,

    },

    personal:{
        edad:{
            type: Number,
        },
        peso:{
            type: Number,
        },
        estatura:{
            type: Number,
        },
        genero:{
            type: String,
        },
        objetivo:{
            type: Number,
        },
        actividad:{
            type: Number,
        }

    },

    comida:{
        type: Schema.Types.Array,
        default: []
    }

});

usuarioSchema.methods.toJSON = function(){
    const { __v,password,...usuario } = this.toObject();
    
    return usuario;
}

module.exports = model('Usuario' , usuarioSchema);