function processData(input) {
    //Enter your code here
    
    var array = input.split(/\r?\n/);
    var m = array[0], n = array[1], len1 = 0, len = 0;
    array = array.slice(2).map(e => e.split(' ').map(Number));
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            len1 = fill(array, i, j, m, n);
            len = (len1 > len) ? len1 : len;
        }
    }
    console.log(len);
} 
function fill(array, i, j, m, n) {
    if (i < 0 || i >= m || j < 0 || j >= n) 
        return 0;
    else if (array[i][j] == 1) {
        array[i][j] = 0;
        return 1+fill(array, i-1, j-1, m, n)
                +fill(array, i-1, j, m, n)
                +fill(array, i-1, j+1, m, n)
                +fill(array, i, j-1, m, n)
                +fill(array, i, j+1, m, n)
                +fill(array, i+1, j-1, m, n)
                +fill(array, i+1, j, m, n)
                +fill(array, i+1, j+1, m, n);
    }
    return 0;
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
