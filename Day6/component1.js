export class CustomEmitter {
    constructor() {
        this.events = {}; // store eventName → callback
    }

    on(eventName, callback) {
        this.events[eventName] = callback; // register listener
    }

    emit(eventName, data) {
        if (this.events[eventName]) {
            this.events[eventName](data); // trigger listener
        }
    }
}
