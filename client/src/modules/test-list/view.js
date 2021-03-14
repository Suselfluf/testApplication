export class View {

    layOutTest(info){
        $('#result').remove()
         info.forEach((elem)=>{
             const nameAnswer = `question-${elem.questionId}`
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
        $('.testLayout').append(`<input id="submit" type="submit">`)
    }

    latOutResult(answers){
        const testLayout = $('.testLayout')
        testLayout.empty()
        testLayout.append(`<p id="result">You result is: ${answers.testResult}</p>`)
    }
}
