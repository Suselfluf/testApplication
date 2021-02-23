import {store} from '../../Store/store';



export class Control {
    constructor() {
        this.currentTest = ''
    }

    initialization(){
        console.log('Test-list initializied')
        const unsub = store.subscribe('currentTest', (value)=>{
            console.log('Hi current test is changed to '+value)
        })

        setTimeout(unsub, 5000)
    }
}


