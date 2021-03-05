
export class Model{
    constructor() {
        this.testInfo = []
    }


     getTestsInfo(){
            return $.ajax('api/tests',{
                dataType: "json"
            })
    }
}




