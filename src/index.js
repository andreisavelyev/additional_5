module.exports = function check(str, bracketsConfig) {
  var arr = str.split("");
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
   return ((count === 0) && (count2 === 0) & (count3 === 0))  ? true : false;
}
