//Q2:Get all the countries with the popultaion of less than 2 lakhs

var result = new XMLHttpRequest();

result.open("GET", "https://restcountries.com/v3.1/all");

result.send();

result.onload = function () {
  var output = JSON.parse(result.response);
  console.log(output);
  var pop=output.filter((ele)=>ele.population<200000)
  console.log(pop);
}

//OUTPUT:Display 62 Countries with the population of less than 200000

