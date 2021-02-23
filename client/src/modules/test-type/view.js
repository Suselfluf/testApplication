export class View{
    constructor(returnToControl){
        this.returnToControl = returnToControl
    }

    viewTestLayout(info){
        info.forEach(elem =>{
            document.getElementById('testType').innerHTML +=`<p class="btn" >${elem.name}</p> `
        })
        document.querySelectorAll('.btn').forEach((e)=>{
            e.addEventListener('click', (e)=>this.chooseTest(e))
        })
    }

    chooseTest(event){
        this.returnToControl(event.target.innerText)
    }
}