let express = require('express');
let bodyParser = require('body-parser');

let usuariosRouter = require('../app/routes/usarios');
let postsRouter = require('../app/routes/posts');

module.exports = function(){
    let app = express();
    app.set("port", 3000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false}));
    app.use(express.static('./public'));
    usuariosRouter(app);
    postsRouter(app);
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public'));
    })
    return app;
}