

export class View {

    layOutTest(info){
        console.log('%3'.codeAt)
        const testLayout = $('.testLayout')
        testLayout.html("");
         info.forEach((elem,indexQuestion)=>{
             $('.testLayout').append(`<div class="testQuestions">${elem.question}</div>`)
             elem.answers.forEach((e,indexAnswer)=>{
                 const nameAnswer = `question${indexQuestion+1}`
                 const idAnswer = `answer${indexAnswer}`
                 const rand = Math.floor(Math.random() * Math.floor(10000))
                 const newId = idAnswer.concat(rand)
                 const testQuestions =$('.testQuestions')
                 testQuestions.last().append(`<input type="radio" name=${nameAnswer} value='${e}' id=${newId}>`)
                 testQuestions.last().append(`<label for=${newId} id="answers"></label>`)
                 testQuestions.last().find('label').last().text(e)
             })
         })
        testLayout.append('<div class="results"> </div>')
        testLayout.append(`<input id="submit" type="submit">`)

        for (const infoElement of $(`label`)) {
            infoElement.addEventListener('click', ev=>{
                ev.target.style.border = 'dashed 2px black'
                console.log(ev.target.style.border)
            })
        }


    }




}
