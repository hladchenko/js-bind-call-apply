const name = "Max";

const context = {
    name: "Andrey"
}

const sayMyName = function () { console.log(this.name); }

sayMyName.call(context)