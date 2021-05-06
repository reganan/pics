function EventEmitter() {
    this.eventMap = {};
}

EventEmitter.prototype = {
    dispatchEvent: function dispatchEvent(name, payload) {
        const fns = (this.eventMap[name] = this.eventMap[name] || []);
        if (fns && fns.length) {
            fns.forEach(fn => fn(payload))
        }
    },
    addEventListener: function addEventListener(name, callback) {
        const callbacks = (this.eventMap[name] = this.eventMap[name] || []);
        if (callbacks.indexOf(callback) === -1) {
            callbacks.push(callback);
        }
    },
    removeEventListener: function removeEventListener(name, callback) {
        const callbacks = (this.eventMap[name] = this.eventMap[name] || []);
        if (callbacks.indexOf(callback) !== -1) {
           this.eventMap[name] = callbacks.filter(d => d !== callback)
        }
    },
    clearEventListener: function clearEventListener(name) {
        this.eventMap[name] = [];
    }
}

const EventHub = new EventEmitter();
export default EventHub;