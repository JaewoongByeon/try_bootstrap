const express = require('express')
const app = express()
const port = 3000

//app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/byeon/01', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/b01.html'));
});
router.get('/byeon/02', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/b02.html'));
});
router.get('/byeon/03', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/b03.html'));
});


router.get('/park/02', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/p02.html'));
});

router.get('/park/03', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/p03.html'));
});

router.get('/park/04', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/p04.html'));
});
router.get('/park/05', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/p05.html'));
});
router.get('/park/06', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/p06.html'));
});



app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))