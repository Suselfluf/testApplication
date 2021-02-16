import {Control as TestTypeControl }from '../test-type/control.js'
export class Control {
    constructor() {
        this.testType = new TestTypeControl();
    }

    initialization(){
         this.testType.initialization()
    }
}