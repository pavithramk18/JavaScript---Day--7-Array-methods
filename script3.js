//Q4:Print Total Population of the country using reduce function

var result = new XMLHttpRequest();

result.open("GET", "https://restcountries.com/v3.1/all");

result.send();

result.onload = function () {
  var output = JSON.parse(result.response);
  console.log(output);
  var totalpop=output.reduce((acc,ele)=>ele.population);
  console.log(totalpop);


}


// OUTPUT:
 //17643060