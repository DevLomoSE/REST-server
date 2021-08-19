const EXPRESS = require('express');
const CORS = require('cors');

class Server {
    APP = undefined;
    PORT = undefined;

    constructor() {
        this.APP = EXPRESS();
        this.PORT = process.env.PORT;
        
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.APP.use( CORS() );

        this.APP.use( EXPRESS.json() );
        
        this.APP.use( EXPRESS.static('public') );
    }

    listen(){
        this.APP.listen(this.PORT, () => {
            console.log(`Example app listening at http://localhost:${this.PORT}`)
        })          
    }

    routes(){

        this.APP.use('/api/usuarios', require('../routes/usuarios.routes') );

        this.APP.get('*', (request, response) => {
            response.send('Hey prro');
        });
    }
}

module.exports = Server;