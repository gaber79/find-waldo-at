var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = 0;
  /* your code here */
  return function() {
		var item = list[i++];
		return item;  	
  
  }
})();

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6
console.log(loadedDie());  // 6
console.log(loadedDie());  // 6