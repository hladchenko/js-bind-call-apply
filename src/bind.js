const house = {
    dog: "Muffin",
    callDog: function() {
        console.log(`Hey, ${this.dog}!`);
    }
}

const callFunction = house.callDog.bind(house);
callFunction()

const house2 = {
    dog: "Heroine",
    callDog: () => console.log(`Hey, ${this.dog}!`),
}

const callFunction2 = house2.callDog.bind(house2);
callFunction2()