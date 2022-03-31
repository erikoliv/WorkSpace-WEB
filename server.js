const select = require("./db")
const findByAtivo = require("./db")
const insertAtivo = require("./db")
const express = require('express')
const cors = require("cors")
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.get('/', async(req, res) => {
    const result = await select()
    return res.json(result)
})

app.get('/ativo/:ativo', async(req, res) => {
    // console.log("Qqr coisa")
    const {ativo} = req.params
    const result = await findByAtivo(ativo)
    return res.json(result)
})

// app.post('/ativo', async(req, res) => {
//     console.log("Outra coisa")
//     const {ativo, hostname} = req.body
//     const result = await insertAtivo(ativo, hostname)
//     return res.json(result)
// })

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})