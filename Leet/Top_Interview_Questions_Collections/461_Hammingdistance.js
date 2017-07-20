var hammingDistance = function(x, y) {
    var result = x^y;
    var count =0;
    while(result) {
        count+= result&1;
        result = result >>1;
    }
    return count;
};