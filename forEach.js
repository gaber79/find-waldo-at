// The second argument/parameter is expected to be a function
// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

function findWaldo(arr, found) {
  arr.forEach( function(name, index) {
   if (name == "Waldo") {
   	found(index);
   }

  });
}

function actionWhenFound(any) {
  console.log("Found Waldo at: " + any + ".");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);