

export class View {

    layOutTest(info){
        console.log('%3'.codeAt)
        const testLayout = $('.testLayout')
        testLayout.html("");
         info.forEach((elem,indexQuestion)=>{
             const nameAnswer = `question${indexQuestion+1}`
             $('.testLayout').append(`<div class="testQuestions ${nameAnswer}">${elem.question}</div>`)
             elem.answers.forEach((e,indexAnswer)=>{
                 const idAnswer = `answer${indexAnswer}`
                 const newId = `${nameAnswer}-${idAnswer}`
                 const testQuestions =$('.testQuestions')
                 testQuestions.last().append(`<input type="radio" name=${nameAnswer} value='${e}' id=${newId}>`)
                 testQuestions.last().append(`<label for=${newId} id="answers"></label>`)
                 testQuestions.last().find('label').last().text(e)
                 testQuestions.last().find('label').last().on('click', function (){
                     $(`.${nameAnswer}`).find('label').removeClass('active')
                     $(this).addClass('active')
                 })
             })
         })
        testLayout.append('<div class="results"> </div>')
        testLayout.append(`<input id="submit" type="submit">`)
    }




}
