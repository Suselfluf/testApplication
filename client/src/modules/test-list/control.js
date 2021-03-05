import {store} from '../../Store/store';
import {View} from './view.js';
import {Model} from './model.js';


export class Control {
    constructor() {
        this.currentTest = ''
        this.model = new Model()
        this.view = new View()
    }

    initialization(){

        store.subscribe('currentTest', (value)=>{
            this.model.getTests(value)
                .then(data=>{
                    this.view.layOutTest(data.testList)
                })
        })

        this.model.sendAnswers()
    }

}


