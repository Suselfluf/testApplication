export class Model{


     getTestsInfo(){
            return $.ajax('api/tests',{
                dataType: "json"
            })
    }
}




