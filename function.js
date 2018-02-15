var compareNumArrays = function(Arr1, Arr2) {
  if (Arr1.length != Arr2.length) {
    return false;
  }
  else {
    for (numIndex = 0; numIndex < Arr1.length; numIndex++) {
      if (Arr1[numIndex] !== Arr2[numIndex]) {
        return false;
      }
    }
    else return true;
  }
};

function valI(condition,ifVal,elseVal){
  if (condition) {return ifVal} else {
    return elseVal
  }

  }


  arr=[1,2,3,4]
_.groupBy(arr,function(num){if(num%2==1){return "odd"}else {return "even"}})

_.sortBy(arr,function(num){if(num%2==1){return "odd"}else {return "even"}})


// foreach and map
var tr = [{a:'B'},{a:"D"}]
_.forEach(tr,function(tr){console.log(tr.a);})
_.map(tr,function(tr){return tr.a})

_.forEach(tr,function(tr){return tr.a})


// jquery portfolio?
var x = $.ajax("https://raw.githubusercontent.com/CPLN-692-401/datasets/master/json/philadelphia-crime-snippet.json")
x = $.ajax("https://raw.githubusercontent.com/CPLN-692-401/datasets/master/json/world-country-capitals.json")
parse
$.ajax('http://api.jquery.com/jquery.ajax/').then(function(res){console.log(res)})

var recipe = function(response){console.log(JSON.parse(response));}
promise.then(recipe)

//promise.then
//placeholder
