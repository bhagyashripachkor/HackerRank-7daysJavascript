function processData(myArray) {
myArray.sort(function(a, b){
    return a - b;
});
var len = myArray.length;
var firstLargest = myArray[len - 1];
var secondLargest = false;
for(var i = myArray.length - 2; i >= 0; i--) {
    if(myArray[i] == firstLargest) {
        continue;
    } else {
        secondLargest = true;
        console.log(myArray[i]);
        break;
    }
}
if(!secondLargest) {
    console.log(firstLargest);
}
}


// tail starts here
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input.split('\n')[1].split(' ').map(Number));
});
