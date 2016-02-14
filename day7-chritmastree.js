function processData(input) {
    //Enter your code here
    
    var str="";
    console.log("        *");
    for (var i = 0; i < 9; i++) { 
        var space = (8-i); 

        str = str.concat(Array(space+1).join(" "));
    var zero = 2 * i + 1;
    str = str.concat(Array(zero+1).join(0));
    str = str.concat("\n");
                                
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
