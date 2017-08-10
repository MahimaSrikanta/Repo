
//HTML
<div id = "closure">


</div>



//Javascript

var div = document.getElementById("closure");

 var helper = function(i) {
 return function () {
    console.log(i)
  }
 }
for(var i =0; i<3; i++) {
  var btn = document.createElement("BUTTON");
  var t = document.createTextNode("button"+i); 
  btn.append(t);
  btn.setAttribute("id",i);
  div.append(btn);
  document.getElementById(i).onclick = helper(i);
}
