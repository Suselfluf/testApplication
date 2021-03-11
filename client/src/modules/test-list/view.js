export class View {

    layOutTest(info){
        const testLayout = $('.testLayout').css('display','grid')
        testLayout.html("");
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
        testLayout.append('<div class="results"> </div>')
        testLayout.append(`<input id="submit" type="submit">`)
    }

    latOutResult(answers){
        console.log(answers)
        $('.testQuestions').css('display','none')
        $('#submit').remove();
        $('.results').remove();
        $('.testLayout').append(`<div></div>`).append('<div class="results"> </div>');
        $('.results').append(`<p>You result is: ${answers.testResult}</p>`)
    }




}
