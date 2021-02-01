const express = require('express')
const app = express()

app.use(express.json())
app.post('/api/tests', (req, res) => {
    console.log(req.body)
    res.end()
})
app.listen(4000, ()=>{
    console.log('done')
})