const express = require('express')
const cors = require('cors')

class Server {

    constructor () {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutes = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Rutas de mi aplicacion
        this.routes();
    }

    middlewares () {
        //LECTURA DE LOS JSON
        this.app.use(express.json());

        // CORS
        this.app.use(cors());
        // directorio publico
        this.app.use(express.static('public'))
    }

    routes () {
        this.app.use(this.usuariosRoutes, require('../routes/user.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port)
        });
    }

}

module.exports = Server;