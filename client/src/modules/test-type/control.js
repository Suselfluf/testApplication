import {View} from './view.js';
import {Model} from './model.js';

export class Control{
    constructor() {
        this.view = new View();
        this.model = new Model();
    }

    initialization(){
        this.model.getTestsInfo()
            .done(data => {
                this.model.testInfo = data;
                this.view.viewTestLayout(data)
            })
            }
}