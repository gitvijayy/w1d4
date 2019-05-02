var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  //console.log(words);
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});

function map (word, function1) {

  var arr = [];

  for (var i = 0; i < word.length; i++) {
  arr.push(function1(word[i]));
  }

  console.log(arr);

}
