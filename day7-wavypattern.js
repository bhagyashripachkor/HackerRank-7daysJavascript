function processData(input) {
    //Enter your code here
    var str = "";
for (var i=1; i<=14; i++) {
for(var j=1;j<=14;j++) {
    str += ((j%2)==1 )? "\u2571" : "\u2572";    
  }
  str+="\n"
}
console.log(str);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
