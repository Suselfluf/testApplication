const request = require('request');

const testList = [
    {
        question: 'Bla bla bla',
        answers: ['Da', 'Neee', 'Blaa'],
        correctAnswer: 'Blaa'
    },
    {
        question: 'Bla bla bla',
        answers: ['Da', 'Neee', 'Blaa'],
        correctAnswer: 'Blaa'
    },
    {
        question: 'Bla bla bla',
        answers: ['Da', 'Neee', 'Blaa'],
        correctAnswer: 'Blaa'
    }
]


const isCreateAction = process.argv.includes('--create')
if(isCreateAction){
    request({
            url : 'http://127.0.0.1:3000/api/test',
            method :"PUT",
            headers : {
                "Content-type": "application/json",
            },
            body: {
                testName: process.argv[process.argv.length-1],
                testList: testList
            },
            json: true
        },(error, res)=> {
        console.log('Message:', res.statusMessage)
        console.log('Code:', res.statusCode)

    })
}
else {
    const testName = process.argv[process.argv.length-1]
    request.get(`http://127.0.0.1:3000/api/test/${testName}`, (error, res, body)=>{
        console.log('Message:', res.statusMessage)
        console.log('Code:', res.statusCode)
        console.log(body)
    })
}

