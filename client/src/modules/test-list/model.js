export class Model {

    getTests(value){
        return new Promise(resolve => {
                fetch(`api/test/${value}`)
                    .then(e=>e.json())
                    .then(data => {
                        resolve(data)
                    })
        })
    }

    sendAnswers(){
        $('form').submit(function (e){
            e.preventDefault();
            var form = $('form').serializeArray();
            console.log(form)
        })
    }
}

