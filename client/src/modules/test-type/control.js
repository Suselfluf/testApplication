import {View} from './view.js';
import {Model} from './model.js';

export class Control{
    constructor() {
        this.view = new View();
        this.model = new Model();
    }

    initialization(){
        this.model.getTestsInfo()
            .then(data => {
                this.view.viewTestLayout(data)
            })
    }
}