class Store{
    constructor() {
        this._store = {}
    }
createChannel(channel){
    this._store[channel] = {
        value: null,
        subscribers: []
    }
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
}

informSubs(channel){
    const {value, subscribers} = this._store[channel]
    subscribers.forEach((sub)=>{
        sub(value)
    })
}

getChannelName(channel){
    const {value} = this._store[channel]
    return value
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

    return ()=> {
        this._store[channel].subscribers.splice(i - 1, 1)
    }
}

}

const store = new Store()

export {store}
