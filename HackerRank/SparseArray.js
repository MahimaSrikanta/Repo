function processData(input) {
    //Enter your code here
 var hash={};
  var count =0;
  var array = input.split("\n");
    var result ="";
   array.forEach((item) => {
       //console.log((!(/\d/g).test(item)), item)
       if((!(/\d/g).test(item)) && count <=1) {
           
            if(hash[item] === undefined) {
                hash[item] = 1;
            }else {
                hash[item] = hash[item]+1;
            }
        }else {
           count++;
          if(count > 2){
            if(hash[item] !== undefined){
             result = result + hash[item] + "\n"
            } else {
               result = result+0
            }
          }

        }
   });
    process.stdout.write(result);
    return (result)
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