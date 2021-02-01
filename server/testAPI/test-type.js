const request = require('request');
const isCreateAction = process.argv.includes('--create')
if(isCreateAction){
    request({
            url : 'http://127.0.0.1:3000/api/tests',
            method :"POST",
            headers : {
                "Content-type": "application/json",
            },
            body: {
                testName: process.argv[process.argv.length-1]
            },
            json: true
        },(error, res)=> {
        console.log('Message:', res.statusMessage)
        console.log('Code:', res.statusCode)

    })
}
else {
    request.get('http://127.0.0.1:3000/api/tests', (error, res, body)=>{
        console.log('Message:', res.statusMessage)
        console.log('Code:', res.statusCode)
        console.log(body)
    })
}

