// call and apply almost the somillar

// bind to set this

var name = "Alex";

var helloService = {
    name: "John",
    say: function () {
        console.log("Hello " + this.name)
    }
}

let say = helloService.say.bind(helloService);

say();

const module1 = {
    x: 42,
    getX: function () {
        return this.x;
    },
};

const unboundGetX = module1.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module1);
console.log(boundGetX());
// Expected output: 42

const animal =  "dogs";
const sleepDuration = "0 and 24 hours";
function greet() {
    console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
    animal: "cats",
    sleepDuration: "12 and 16 hours",
};

greet.call(obj)

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

console.log(min);
// Expected output: 2


const max1 = Math.max.call(null, ...numbers)
console.log(max1);