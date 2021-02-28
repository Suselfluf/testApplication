export class View{
    constructor(returnToControl){
        this.returnToControl = returnToControl
    }

    viewTestLayout(info){
        info.forEach(elem =>{
            //document.getElementById('testType').innerHTML +=`<p class="btn" >${elem.name}</p> `
            $('#testType').prepend(`<p id="titles">${elem.name}</p>`)
            $('#titles').addClass("btn")
        })
        for (const button of $('.btn')) {
            button.addEventListener('click', (e)=>this.chooseTest(e))
        }
    }

    chooseTest(event){
        this.returnToControl(event.target.innerText)
    }
}