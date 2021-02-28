

export class Model {
    constructor() {

    }
    getTests(){
        return $.ajax('api/test/JS',{
            dataType: "json"
        })

    }

}