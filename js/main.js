// variable called kelvin stores kelvin units.
const kelvin = 293;

// variable called celsius converts kelvin into celsius.
const celsius = kelvin - 273;

// variable called farenheit converts celsius into farenheit.
// .floor rounds the converted temprature into an integer.
const farenheit = Math.floor(celsius * (9/5) + 32);
console.log(`The temprature is ${farenheit} degrees Fahrenheit.`);

// variable newton converts celsius into newton and then rounds it down into an integer.
const newton = Math.floor(celsius * (33/100));
console.log(`The temprature is ${newton} degrees Newton.`);