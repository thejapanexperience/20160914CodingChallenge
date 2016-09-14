// $(document).ready(capitalizeEveryThird) 





function thirdWord(string) {
  console.log(string);
  string = string.toLowerCase();
  var array = string.split(" ");
  var newArray = array;
  console.log('array: ',array);
  for (var i = 2; i<array.length; i+=3) {
    var word = array[i]
    newArray[i] = word.toUpperCase();
  }
  newArray = newArray.join(' ');
  console.log('newArray: ',newArray);
}



thirdWord("The quick brown fox jumps over the lazy dog.")




function capitalizeEveryThird(str) {

  let words = str.split (' ');

  let newWords = words.map((word, i) => {
    if((i+1)%3 ===0) {
      return word.toUpperCase();
    } else {
      return word.toLowerCase();
    }
  });


  newWords = newWords.join(' ');
  console.log('newWords: ',newWords);
}

capitalizeEveryThird("The quick brown fox jumps over the lazy dog");