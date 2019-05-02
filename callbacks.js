function findWaldo(arr, found) {

  arr.forEach(function(value,index) {

    if (value === "Waldo") {
      found(index);
    }
  });

}

function actionWhenFound(index) {
  console.log("Found him at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);