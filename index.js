import moment from 'moment';
// The end point is actually ./module_nodes/moment/min/moment.min.js,
// but node.js knows the location of each npm module

console.log("Hello from JavaScript!");
console.log(moment().startOf('day').fromNow());
// moment is a global variable declared & initialized in moment.js, line 10

const name = 'Bob', time = "today";
console.log(`Hello ${name}, how are you ${time}?`);
