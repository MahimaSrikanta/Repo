
/*
Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?


*/
//Accepted
//known that A XOR A = 0 and the XOR operator is commutative, 
    var result =0;
    
    nums.forEach(function(item) {
        result ^= item;
    })
    return result
};