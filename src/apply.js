const context = {
    word: "building"
}

const factory = function(name) { console.log(name ? name : this.word);};

factory.apply(context, ["Ruslan"])