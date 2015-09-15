  var cryptosquare = function(inputString) {

inputString = inputString.replace(/[^a-zA-Z0-9]/g, '');
inputString = inputString.toLowerCase();
  var inputStringLength = inputString.length;

  var squareRoot = Math.sqrt(inputStringLength);

    squareRoot = Math.ceil(squareRoot);
    var remainder = inputStringLength - (squareRoot * squareRoot);

  var splitWordsArray = new Array();
  var i = squareRoot;

  do {
      splitWordsArray.push(inputString.substring(0, i));
  } while((inputString = inputString.substring(i, inputString.length)) != "");

  var htmlString="";

  for (var count = 0; count < splitWordsArray.length; count++){

    htmlString = htmlString + splitWordsArray[count] + "<br>"; 
  }


  return htmlString;
  }

var codePhrase = function(splitWordsArray){

 var codePhraseArray = new Array();
 var fiver = 0; 

 for (var i = 0; i < splitWordsArray.length; i++){
  codePhraseArray.push()
 }

}



$(document).ready(function() {
  $("form#cryptosquare").submit(function(event) {
    inputString = $("input#input1").val();

    var result = cryptosquare(inputString);
    var phrase = 

      $(".answer").html(result); 

      $(".phrase").html(result);  

    $("#result").show();
    event.preventDefault();
  });
});
