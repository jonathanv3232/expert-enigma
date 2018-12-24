function EventEmitter() {
  this.events = {};
}

EventEmitter.prototype.on = function(event, listener) {
  console.log(this);
  this.events[event] = this.events[event] || [];
  this.events[event].push(listener);
};

EventEmitter.prototype.emit = function(event) {
  if (this.events[event]) {
    this.events[event].forEach(listener => listener());
  }
};

module.exports = EventEmitter;
