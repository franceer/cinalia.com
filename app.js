'use strict';


//Set Modules & variables
let express = require('express')
    , app = express()
    , router = express.Router();


//App configuration
let port = process.env.PORT || 80;
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

router.get('/', function (req, res) {
    res.render('index');
});

app.use(router);

//Listen to port
app.listen(port, function () {
    console.log('Listening on port ' + port);
});