
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

  var createCodePhrase = function(splitWordsArray){
    debugger;
      var newStringArray =[]; //take the first char of the first array item
                              //then take the first char of the second array item.
                              //stop when you have reached the end of the array.
                              //then take the second char of the first
                              //continue until you have again reached end.

      for (var i = 0; i < 9; i++){
        for (var j = 0; j < 8; j= j + ){
          newStringArray.push(splitWordsArray[i][j]);
          console.log(newStringArray);
        }
      }



      // var c = 5;
      // var newStringFormatted="";
      //
      // for (i=0; i < newString.length; i=i+5){
      // newStringFormatted = newStringFormatted + newString.substr(i, c) + " ";
      // c=c+6;
      // }
    return newStringArray;

    }


$(document).ready(function() {
  $("form#cryptosquare").submit(function(event) {
    inputString = $("input#input1").val();


    var cleanString = createCleanString(inputString);
    var squareRoot = createSquareRoot(cleanString);
    var splitWordsArray = createSplitWordsArray(squareRoot, cleanString);

    var htmlString = createHtmlString(splitWordsArray);
    var newString = createCodePhrase(splitWordsArray);

      $(".answer").html(htmlString);

      $(".phrase").html(newString);

    $("#result").show();
    event.preventDefault();
  });
});
