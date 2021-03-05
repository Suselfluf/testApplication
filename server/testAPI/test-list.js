const request = require('request');

const testList = [
     {
        question: `Какой из вариантов содержит ошибку:`,
        answers: [
            '<a href=”page.html”>Ссылка',
            '<a href=”page.html#17″>Ссылка',
            '<a href=”page.html”#top>Ссылка',
            '<a href=”page.html#top”>Ссылка'],
        correctAnswer: '<a href=”page.html”#top>Ссылка'
    },
    {
        question: `Какой из представленных вариантов является валидным по XHTML 1.1:`,
        answers: [
            '<img src=”foto.jpg” alt=”Изображение” />',
            '<img src=”foto.jpg” title=”Изображение”>',
            '<img src=”foto.jpg” alt=”Изображение”>',
            '<img src=”foto.jpg” title=”Изображение” />'],
        correctAnswer: '<img src=”foto.jpg” alt=”Изображение” />'
    },
    {
        question: `Как правильно задать ссылку на адрес электронной почты:`,
        answers: [
            '<a href=”email:myrusakov@gmail.com”>Написать',
            '<a href=”myrusakov@gmail.com”>Написать',
            '<a href=”mail:myrusakov@gmail.com”>Написать',
            '<a href=”mailto:myrusakov@gmail.com”>Написать'],
        correctAnswer: '<a href=”mailto:myrusakov@gmail.com”>Написать'
    },
    {
        question: `Какой тег нужно добавить для переноса строки, сохранив при этом валидность XHTML 1.1?`,
        answers: [
            '<hr />',
            '<hr>',
            '<br />',
            '<br>'],
        correctAnswer: '<br>'
    },
    {
        question: `Как открыть ссылку в новой вкладке?`,
        answers: [
            '<a href=”url” new>',
            '<a href=”url” target=”_blank”>',
            '<a href=”url” target=”new”>',
            ],
        correctAnswer: '<a href=”url” target=”_blank”>'
    },
    {
        question: `Игорю нужно сделать ширину таблицы на всю страницу (либо родительского контейнера). Как ему нужно написать тег <table>?`,
        answers: [
            '<table>',
            '<table width=”100%”>',
            '<table width=”auto”>',
            '<table width=”100″>'],
        correctAnswer: '<table width=”100%”>'
    },
    {
        question: `Какой из представленных ниже HTML-кодов НЕ является валидным XHTML 1.1:`,
        answers: [
            '<u>Подчёркнутый текст</u>',
            '<i>Курсив</i>',
            '<p>Текст</p>',
            '<p style=”font-size: 1000%;”>Текст</p>'],
        correctAnswer: '<u>Подчёркнутый текст</u>'
    },
    {
        question: `Александру требуется написать химическую формулу тетрасульфида димышьяка (As2S4). Каким образом это можно сделать?`,
        answers: [
            'As<sup>2S<sup>4',
            'As<pow>2S<pow>4',
            '<Dunto what to write>',
            'As<sub>2S<sub>4'],
        correctAnswer: 'As<sub>2S<sub>4'
    },
    {
        question: `Кто задаёт Web стандарты?`,
        answers: [
            'Microsof',
            'Mozilla',
            'Консорциум Всемирной паутины',
            'Google'],
        correctAnswer: 'Консорциум Всемирной паутины'
    },
    {
        question: `Выберите правильный вариант установки цвета фона страницы?`,
        answers: [
            '<background>yellow',
            '<body style=”background-color:yellow;”>',
            '<body background=”yellow”>',
            ],
        correctAnswer: '<body style=”background-color:yellow;”>'
    },
    {
        question: `Выберите правильный HTML тег для переноса на новую строку?`,
        answers: [
            '<break>',
            '<br>',
            '<lb>'
            ],
        correctAnswer: '<br>'
    },
    {
        question: `HTML – это аббревиатура от?`,
        answers: [
            'Hyperlinks and Text Markup Language',
            'Hyper Text Markup Language',
            'Home Tool Markup Language'
        ],
        correctAnswer: 'Hyper Text Markup Language'
    },

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

