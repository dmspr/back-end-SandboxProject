const express = require('express')
const indexRouter = require('./routes/index')
var cors = require('cors')


const app = express()
const port = 4000

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(express.json())
app.use('/', indexRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})