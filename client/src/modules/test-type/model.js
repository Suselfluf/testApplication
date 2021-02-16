
export class Model{
    constructor() {
         this.testInfo = []
    }

     getTestsInfo(){
        return new Promise ((resolve) => {
            fetch('api/tests')
                .then(res => res.json())
                .then(data => {
                    this.testInfo = data
                    resolve(this.testInfo)
                })
         })

           //     data.forEach(elem =>{
           //         this.testInfo.concat(elem.name)
           //         console.log(elem.name)
           //         console.log(this.testInfo)
           //     })
           // });


    }
}