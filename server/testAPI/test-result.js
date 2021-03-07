const request = require('request');

const testResult = {
    testName: 'JS',
    result: [
        {
            name: 'question-1',
            value: 'Комментарии упрощают понимание скрипта'
        },
        {
            name: 'question-2',
            value: 'Отвечает за функции на стороне клиента'
        },
        {
            name: 'question-3',
            value: 'Глобальные видны повсюду, локальные только в функциях'
        }
    ]
}


    request({
            url : 'http://127.0.0.1:3000/api/result',
            method :"POST",
            headers : {
                "Content-type": "application/json",
            },
            body: testResult,
            json: true
        },(error, res)=> {
        console.log('Message:', res.statusMessage)
        console.log('Code:', res.statusCode)
        console.log('Body:', res.body)

    })

