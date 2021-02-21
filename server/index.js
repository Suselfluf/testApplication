const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const testTypeRouter = require('./routers/test-type')
const testListRouter = require('./routers/test-list')

class App {
    constructor() {
        this.server = express()
        this.port = config.get('port')
        this.urlDB = config.get('urlDB')
    }

    async connectDB () {
        await mongoose.connect(this.urlDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    }

    addMiddleware (){
        this.server.use(express.json())
        this.server.use('/api', testTypeRouter)
        this.server.use('/api', testListRouter)
    }

    async runServer() {
        try {
            await this.connectDB();
            this.server.listen(this.port, ()=>{
                console.log(`Server run on Port: ${this.port}`)
            })
        }
        catch (e){
           console.log('Error:', e.message)
        }

    }

    initialize() {
        this.addMiddleware()
        this.runServer()
    }
}

const app = new App()
app.initialize()
