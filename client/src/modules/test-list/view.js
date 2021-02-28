

export class View {
    constructor() {

    }

    layOutTest(info){



         info.forEach(elem=>{
             $('.testLayout').append(`<div class="testQuestions">${elem.question}</div>`)
             elem.answers.forEach(e=>{
                 console.log(e)
                 $('.testQuestions').last().append(`<p id="answers"></p>`)
                 $(`.testQuestions`).last().find('p').last().text(e)


             })



         })
    }


}