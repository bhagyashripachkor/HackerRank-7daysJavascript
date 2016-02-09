function printObjectProperty(myObject) {
    var car = { type: myObject.type, model: myObject.model, color: myObject.color };
    console.log("{ type: '" + car.type + "', model: '" + car.model + "', color: '" + car.color + "' }");
} 

// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    var obj = _input.split(' ');
    var myObject = new Object;
    myObject.type = obj[0];
    myObject.model = obj[1];
    myObject.color = obj[2];

    printObjectProperty(myObject);
});
