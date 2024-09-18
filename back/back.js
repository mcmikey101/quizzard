const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/get', (req, res) => {
    res.send({msg: 'msg'})
})

app.listen(3000, () => {
    console.log('server is up')
})