function processData(input) {
    //Enter your code here
    var str=input.split('\n');
    var t=parseInt(str[0]);
    for(var i=0;i<t;i++){
    var count=0;
    var curr=input.split('\n')[i+1];
    var first=0;
    var last=curr.length-1;
    while(first<=last){
        count+=Math.abs(curr.charCodeAt(last)-curr.charCodeAt(first));
        first++;
        last--;
    }
 console.log(count);

  }
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
