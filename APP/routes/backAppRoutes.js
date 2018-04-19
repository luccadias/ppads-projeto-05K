var router = require('express').Router();
var webAppController = require("../controller/webAppController.js");

router.post('/loginAuth', function (req, res) {
    var userCredentials = req.body;
    webAppController.checkLoginCredentials(userCredentials)
        .then((response) => {
            res.status(200).send(response);
        })
        .catch((error) => {
            console.log("<<<<<<<<<<Request error>>>>>>>>>>\n" + error)
            res.status(200).send("AN INTERNAL SERVER ERROR OCURRED")
        });
});

router.post('/registerMember', function (req, res) {
    var userRegister = req.body;
    webAppController.checkRegisterMember(userRegister)
        .then((response) => {
            res.status(200).send("Usuario Cadastrado");
        })
        .catch((error) => {
            console.log("<<<<<<<<<<Request error>>>>>>>>>>\n" + error)
            res.status(200).send("AN INTERNAL SERVER ERROR OCURRED")
        });
});
router.post('/updateImage', function (req, res) {
    var base64 = Buffer.from(req.files.sampleData.data).toString('base64')
    var objData = {
        "image": base64,
        "email": req.body.emailuser
    }
    webAppController.checkImage(objData)
        .then((response) => {
            res.status(200).send("Perfil Update");
        })
        .catch((error) => {
            console.log("<<<<<<<<<<Request error>>>>>>>>>>\n" + error)
            res.status(200).send("AN INTERNAL SERVER ERROR OCURRED")
        });
});

module.exports = router;