
  var createCleanString = function(inputString){
      cleanString = inputString.toLowerCase(); //lowercase
      cleanString = inputString.replace(/[^a-zA-Z0-9]/g, '');//clean

    return cleanString;
  }

  var createSquareRoot = function(cleanString){
      var inputStringLength = cleanString.length;
      var squareRoot = Math.sqrt(inputStringLength); //generate sq rt
      squareRoot = Math.ceil(squareRoot);
      var remainder = inputStringLength - (squareRoot * squareRoot);
    return squareRoot;
  }


  var createSplitWordsArray = function(squareRoot, cleanString){
      var splitWordsArray = new Array();
      var i = squareRoot-1;

      do {
          splitWordsArray.push(cleanString.substring(0, i));
      } while((cleanString = cleanString.substring(i, cleanString.length)) != "");

      return splitWordsArray;
  }

   var createHtmlString = function(splitWordsArray){
     var htmlString="";
     for (var count = 0; count < splitWordsArray.length; count++){

       htmlString = htmlString + splitWordsArray[count] + "<br>";
     }
     return htmlString;

   }

  var createCodePhrase = function(splitWordsArray, cleanString){
  //  debugger;
      var newStringArray =[]; //take the first char of the first array item
                              //then take the first char of the second array item.
                              //stop when you have reached the end of the array.

                              //then take the second char of the first
                              //continue until you have again reached end.


console.log(splitWordsArray);
  for (var j = 0; j < splitWordsArray.length; j++) {
      for (var i = 0; i < splitWordsArray.length; i++){
        newStringArray.push(splitWordsArray[i].charAt(j));
      }
    }
    var newString = newStringArray.join("").replace(/.{5}/g, "$&" + " ");
    return newString;

    }


$(document).ready(function() {
  $("form#cryptosquare").submit(function(event) {
    inputString = $("input#input1").val();


    var cleanString = createCleanString(inputString);
    var squareRoot = createSquareRoot(cleanString);
    var splitWordsArray = createSplitWordsArray(squareRoot, cleanString);

    var htmlString = createHtmlString(splitWordsArray);
    var newString = createCodePhrase(splitWordsArray, htmlString);

      $(".answer").html(htmlString);

      $(".phrase").html(newString);

    $("#result").show();
    event.preventDefault();
  });
});
