export class View{
    constructor() {

    }


    viewTestLayout(info){






        info.forEach(elem => {
            document.getElementById('testType').innerHTML +=`<p>${elem.name}</p> `
        })
    }
}