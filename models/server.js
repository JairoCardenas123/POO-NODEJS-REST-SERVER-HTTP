const express = require('express');
const cors = require('cors');
class Server{
    constructor(){
        this.app = express();

        this.port = process.env.PORT
        this.usuariosPath = "/api/usuarios";
        //Middlewares
        this.middlewares();
        //Routes                    
        this.routes();

    }

    middlewares(){
        //cors
        this.app.use(cors());
        //public directory
        this.app.use(express.static('public'))
    }

    routes(){
        this.app.use(this.usuariosPath,require('../routes/usuario.routes.js'));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER IS RUNNING ON PORT${this.port}`);
        })
    }

}

module.exports = Server