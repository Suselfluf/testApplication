import {View} from './view.js';
import {Model} from './model.js';
import {store} from '../../Store/store'

export class Control{
    constructor() {
        this.view = new View(this.getCurrentTarget.bind(this));
        this.model = new Model();
        this.test =''
    }

    initialization(){
        this.model.getTestsInfo()
            .done(data => {
                this.model.testInfo = data;
                this.view.viewTestLayout(data)
            })
    }

    getCurrentTarget(currentTest){
        store.setData('currentTest', currentTest)
    }

    printingInfo(info){
        console.log(info)
    }
}