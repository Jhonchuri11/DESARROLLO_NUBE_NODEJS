const router = require('express').Router()

router.get('/', (req, res) => {
    res.sendFile("./src/home.html", {
        root: __dirname
    })
})

router.get('/clientes', (req, res) => {
    res.sendFile("./src/clientes.html" , {
        root: __dirname
    })
})

router.get('/productos', (req, res) => {
    res.sendFile("./src/productos.html", {
        root: __dirname
    })
})

module.exports = router