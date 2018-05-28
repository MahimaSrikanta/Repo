var romanToInt = function(s) {
    var rom = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    var res = 0;
    for (var i=0; i<s.length; i++) {
        if (rom[s.charAt(i)] < rom[s.charAt(i+1)]) {
            res -= rom[s.charAt(i)];
        } else {
            res += rom[s.charAt(i)];
        }
    }
    return res;
};