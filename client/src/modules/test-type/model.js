
export class Model{
    constructor() {
        this.testInfo = []
    }


     getTestsInfo(){
        return new Promise ((resolve) => {
            $.ajax('api/tests',{
                dataType: "json"
            })
                .done(function (data){
                    this.testInfo = data;
                    resolve(this.testInfo)
                })
        })
    }
}




