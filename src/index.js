module.exports = function check(str, bracketsConfig) {
  /*var arr = str.split("");
  var count = 0;
  var count2 = 0;
  var count3 = 0
    
  for (var i = 0; i < arr.length; i++) {
     
     if (arr[i] === "(")  {count++};
     if (arr[i] === "[") {count2++};
     if (arr[i] === "{") {count3++};
     if (arr[i] === ")") {count--};
     if (arr[i] === "]") {count2--};
     if (arr[i] === "}") {count3--}
     if ((count < 0) || (count2 < 0) ||(count3 < 0)) {return false};
  }
   return ((count === 0) && (count2 === 0) & (count3 === 0))  ? true : false;*/

   var brackets = str.split('');
   var opening = [];
   var closing = [];
   var stack = [];

   for(var i = 0; i<bracketsConfig.length; i++){
	  for(var j = 0; j<bracketsConfig[i].length; j++){
	    if(j%2===0) {
	    	opening.push(bracketsConfig[i][j])
	    } else {
	    	closing.push(bracketsConfig[i][j])
	    }
	  }
}

	
   for (var i = 0; i < brackets.length; i++){
   	var bracket = brackets[i];

    if ((opening.indexOf(bracket) > -1) && (opening.indexOf(bracket)!=closing.indexOf(bracket))) {
   		stack.push(bracket);
    } else if ((opening.indexOf(bracket) > -1)){
       if (stack[stack.length-1] == bracket) {
         stack.pop();
       } else {
         stack.push(bracket)
       }
    } else {
       var popped = stack.pop();
       if ((opening.indexOf(popped)!=closing.indexOf(bracket) || popped == undefined)){
         return false;
       }
       
    }
   }

   return stack.length>0 ? false : true;
}	
