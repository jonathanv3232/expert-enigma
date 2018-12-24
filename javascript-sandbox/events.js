const EventEmitter = require('./eventEmitter');
const emtr = new EventEmitter();
emtr.on('finishedCoding', () => console.log('you finishedCoding'));
emtr.emit('finishedCoding');
