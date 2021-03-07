module.exports = function (results, test){
    const testCount = test.length;
    let correctAnswers = 0
    results.map((result)=>{
        const currentQuestion = test.find((question)=>{
            const id = result.name.split('-')[1]
            return question.questionId === +id
        })
        if(currentQuestion.correctAnswer === result.value){
            correctAnswers++
        }
    })
    return (correctAnswers / testCount) * 100
}
