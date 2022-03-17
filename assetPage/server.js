const select = require("./db")
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', async(req, res) => {
    const result = await select()
    return res.json(result)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})