//Q5:Print the countries which uses US Dollar as Currency

var result = new XMLHttpRequest();

result.open("GET", "https://restcountries.com/v3.1/all");

result.send();

result.onload = function () {
  var output = JSON.parse(result.response);
  console.log(output);

  var res=output.filter((ele)=>ele.currencies=="USD");
  console.log(res);

  



  

}

  



