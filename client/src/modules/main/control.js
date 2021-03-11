import {Control as TestTypeControl }from '../test-type/control.js'
import {Control as TestListControl } from '../test-list/control.js'
export class Control {
    constructor() {
        this.testType = new TestTypeControl();
        this.testList = new TestListControl();
    }

    initialization(){
        this.testType.initialization()
        this.testList.initialization()
    }
}