import {store} from "../../Store/store";

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
         return new Promise(resolve => {
             $('form').submit(function (e){
                 e.preventDefault();
                 const form = $('form').serializeArray();
                 const testResult = {
                     testName:store.getChannelValue('currentTest'),
                     result: form
                 }
                 $.ajax('api/result',{
                     method :"POST",
                     data: JSON.stringify(testResult),
                     dataType: 'json',
                     headers : {
                         "Content-type": "application/json",
                     },
                 })
                     .done(data=>{
                         resolve(data)
                     })
             })
         })
    }
}

