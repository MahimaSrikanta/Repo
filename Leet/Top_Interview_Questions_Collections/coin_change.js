
//Display different ways an amount can be reached with given coins using dynamic programming

var coinChange = function(coins, amount) {
  var result =[];
  var count =false; 
  var helper = function (coins, amount, result, count) {
   //base case
   if(amount < 0) {
     return -1;
   }
   
   if(amount === 0) {
     count = true;
     console.log(result)
     return result;
     
   }

   for(var i=0; i<coins.length; i++) {
    result.push(coins[i]);
    if(count) break;
    helper(coins,amount-coins[i], result, count);
    result.pop();
   }
   return result;
  }
  
   return helper(coins, amount, result, count);
   
};

coinChange([1,2,5], 3)


//Count the different ways an amount can be reached with the given coins using dynamic programming

