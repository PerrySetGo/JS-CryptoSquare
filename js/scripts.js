
  var createCleanString = function(inputString){
      cleanString = inputString.toLowerCase(); //lowercase
      cleanString = inputString.replace(/[^a-zA-Z0-9]/g, '');//clean

    return cleanString;
  }

  var createSquareRoot = function(cleanString){
      var inputStringLength = cleanString.length;
      console.log(inputStringLength);
      var squareRoot = Math.sqrt(inputStringLength); //generate sq rt
      squareRoot = Math.ceil(squareRoot);
      var remainder = inputStringLength - (squareRoot * squareRoot);
    return squareRoot;
  }


  var createSplitWordsArray = function(squareRoot, cleanString){
      var splitWordsArray = new Array();
      var i = squareRoot;

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

  var createCodePhrase = function(cleanString, squareRoot){
     var codePhrase = "";
     var wordNo = squareRoot;
     codePhrase = cleanString.replace(/(.{5})/g, '$1 '); //need to make new array here.
     return codePhrase;
    }


$(document).ready(function() {
  $("form#cryptosquare").submit(function(event) {
    inputString = $("input#input1").val();

    var cleanString = createCleanString(inputString);
    var squareRoot = createSquareRoot(cleanString);
    var splitWordsArray = createSplitWordsArray(squareRoot, cleanString);

    var htmlString = createHtmlString(splitWordsArray);
    var codePhrase = createCodePhrase(cleanString, squareRoot);

      $(".answer").html(htmlString);

      $(".phrase").html(codePhrase);

    $("#result").show();
    event.preventDefault();
  });
});
