const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../db/db');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 5000;
        this.paths = {
            auth: '/auth',
            user: '/user',
        }
        this.db();
        this.middlewares();
        this.routes();
    }

    async db (){
        await dbConnection();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    routes(){
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.user, require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port ,()=>{
            console.log(`Server is running on port ${this.port}`);

        })
    }
}

module.exports = Server;