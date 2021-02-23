class Store{
    constructor() {
        this._store = {}
    }
createChannel(channel){
    this._store[channel] = {
        value: null,
        subscribers: []
    }
    this.log()
}

setData(channel, value){
    if(this._store[channel]){
        this._store[channel].value=value;
        this.informSubs(channel)

    }
    else {
        this.createChannel(channel)
        this._store[channel].value=value
    }
    this.log()
}

informSubs(channel){
    const {value, subscribers} = this._store[channel]
    subscribers.forEach((sub)=>{
        sub(value)
    })
    this.log()
}

subscribe(channel, sub){
    let i;
    if(this._store[channel]){
        this._store[channel].subscribers.push(sub)
    }
    else{
        this.createChannel(channel)
        this._store[channel].subscribers.push(sub)
    }
    this.log()
    return ()=> {
        this._store[channel].subscribers.splice(i - 1, 1)
        this.log()
    }
}

log(){
    console.log(this._store)
}
}

const store = new Store()

export {store}
