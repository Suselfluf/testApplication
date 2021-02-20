export class View{
    constructor() {

    }

    viewTestLayout(info){
        info.forEach(elem => {
            document.getElementById('testType').innerHTML +=`<p class="btn">${elem.name}</p> `
        })
    }
}