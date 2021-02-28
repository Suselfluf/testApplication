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
        this.model.getTests()
            .done(data => {
                //console.log(data.testList)
                this.view.layOutTest(data.testList)
            })
        const unsub = store.subscribe('currentTest', (value)=>{
            console.log('Hi current test is changed to '+value)
            fetch(`api/test/${value}`)
                .then(e=>e.json())
                .then(data=>console.log(data))
        })
    }

}


