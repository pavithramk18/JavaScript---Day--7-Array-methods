console.log("JavaScript - Day -7: Array methods");

//Solving Problems using array functions on RESTCOUNTRIES API("https://restcountries.com/v3.1/all")

//Q1:Get all countries from Asia continent/region by using Filter Method

var result = new XMLHttpRequest();

result.open("GET", "https://restcountries.com/v3.1/all");

result.send();

result.onload = function () {
  var output = JSON.parse(result.response);
  console.log(output);

  var continent = output.filter((ele) => ele.continents == "Asia");
  console.log(continent);
};


// OUTPUT:Displays 50 countries with the Continent name Asia
// 0
// : 
// {name: {…}, tld: Array(1), cca2: 'MV', ccn3: '462', cca3: 'MDV', …}
// 1
// : 
// {name: {…}, tld: Array(1), cca2: 'PK', ccn3: '586', cca3: 'PAK', …}
// 2
// : 
// {name: {…}, tld: Array(2), cca2: 'IR', ccn3: '364', cca3: 'IRN', …}
// 3
// : 
// {name: {…}, tld: Array(1), cca2: 'ID', ccn3: '360', cca3: 'IDN', …}
// 4
// : 
// {name: {…}, tld: Array(1), cca2: 'AF', ccn3: '004', cca3: 'AFG', …}
// 5
// : 
// {name: {…}, tld: Array(2), cca2: 'SA', ccn3: '682', cca3: 'SAU', …}
// 6
// : 
// {name: {…}, tld: Array(1), cca2: 'KH', ccn3: '116', cca3: 'KHM', …}
// 7
// : 
// {name: {…}, tld: Array(1), cca2: 'NP', ccn3: '524', cca3: 'NPL', …}
// 8
// : 
// {name: {…}, tld: Array(1), cca2: 'MY', ccn3: '458', cca3: 'MYS', …}
// 9
// : 
// {name: {…}, tld: Array(2), cca2: 'TH', ccn3: '764', cca3: 'THA', …}
// 10
// : 
// {name: {…}, tld: Array(2), cca2: 'JO', ccn3: '400', cca3: 'JOR', …}
// 11
// : 
// {name: {…}, tld: Array(2), cca2: 'HK', ccn3: '344', cca3: 'HKG', …}
// 12
// : 
// {name: {…}, tld: Array(1), cca2: 'TJ', ccn3: '762', cca3: 'TJK', …}
// 13
// : 
// {name: {…}, tld: Array(1), cca2: 'TM', ccn3: '795', cca3: 'TKM', …}
// 14
// : 
// {name: {…}, tld: Array(1), cca2: 'MO', ccn3: '446', cca3: 'MAC', …}
// 15
// : 
// {name: {…}, tld: Array(2), cca2: 'SY', ccn3: '760', cca3: 'SYR', …}
// 16
// : 
// {name: {…}, tld: Array(2), cca2: 'KZ', ccn3: '398', cca3: 'KAZ', …}
// 17
// : 
// {name: {…}, tld: Array(2), cca2: 'KR', ccn3: '410', cca3: 'KOR', …}
// 18
// : 
// {name: {…}, tld: Array(3), cca2: 'TW', ccn3: '158', cca3: 'TWN', …}
// 19
// : 
// {name: {…}, tld: Array(2), cca2: 'JP', ccn3: '392', cca3: 'JPN', …}
// 20
// : 
// {name: {…}, tld: Array(5), cca2: 'CN', ccn3: '156', cca3: 'CHN', …}
// 21
// : 
// {name: {…}, tld: Array(1), cca2: 'LB', ccn3: '422', cca3: 'LBN', …}
// 22
// : 
// {name: {…}, tld: Array(3), cca2: 'LK', ccn3: '144', cca3: 'LKA', …}
// 23
// : 
// {name: {…}, tld: Array(2), cca2: 'AE', ccn3: '784', cca3: 'ARE', …}
// 24
// : 
// {name: {…}, tld: Array(1), cca2: 'MN', ccn3: '496', cca3: 'MNG', …}
// 25
// : 
// {name: {…}, tld: Array(1), cca2: 'YE', ccn3: '887', cca3: 'YEM', …}
// 26
// : 
// {name: {…}, tld: Array(1), cca2: 'LA', ccn3: '418', cca3: 'LAO', …}
// 27
// : 
// {name: {…}, tld: Array(1), cca2: 'IN', ccn3: '356', cca3: 'IND', …}
// 28
// : 
// {name: {…}, tld: Array(1), cca2: 'KP', ccn3: '408', cca3: 'PRK', …}
// 29
// : 
// {name: {…}, tld: Array(1), cca2: 'IO', ccn3: '086', cca3: 'IOT', …}
// 30
// : 
// {name: {…}, tld: Array(1), cca2: 'KG', ccn3: '417', cca3: 'KGZ', …}
// 31
// : 
// {name: {…}, tld: Array(1), cca2: 'CX', ccn3: '162', cca3: 'CXR', …}
// 32
// : 
// {name: {…}, tld: Array(1), cca2: 'OM', ccn3: '512', cca3: 'OMN', …}
// 33
// : 
// {name: {…}, tld: Array(1), cca2: 'PH', ccn3: '608', cca3: 'PHL', …}
// 34
// : 
// {name: {…}, tld: Array(1), cca2: 'BH', ccn3: '048', cca3: 'BHR', …}
// 35
// : 
// {name: {…}, tld: Array(2), cca2: 'QA', ccn3: '634', cca3: 'QAT', …}
// 36
// : 
// {name: {…}, tld: Array(1), cca2: 'VN', ccn3: '704', cca3: 'VNM', …}
// 37
// : 
// {name: {…}, tld: Array(3), cca2: 'SG', ccn3: '702', cca3: 'SGP', …}
// 38
// : 
// {name: {…}, tld: Array(1), cca2: 'GE', ccn3: '268', cca3: 'GEO', …}
// 39
// : 
// {name: {…}, tld: Array(1), cca2: 'CC', ccn3: '166', cca3: 'CCK', …}
// 40
// : 
// {name: {…}, tld: Array(1), cca2: 'KW', ccn3: '414', cca3: 'KWT', …}
// 41
// : 
// {name: {…}, tld: Array(1), cca2: 'MM', ccn3: '104', cca3: 'MMR', …}
// 42
// : 
// {name: {…}, tld: Array(1), cca2: 'UZ', ccn3: '860', cca3: 'UZB', …}
// 43
// : 
// {name: {…}, tld: Array(1), cca2: 'BD', ccn3: '050', cca3: 'BGD', …}
// 44
// : 
// {name: {…}, tld: Array(1), cca2: 'AM', ccn3: '051', cca3: 'ARM', …}
// 45
// : 
// {name: {…}, tld: Array(1), cca2: 'BN', ccn3: '096', cca3: 'BRN', …}
// 46
// : 
// {name: {…}, tld: Array(1), cca2: 'IL', ccn3: '376', cca3: 'ISR', …}
// 47
// : 
// {name: {…}, tld: Array(2), cca2: 'PS', ccn3: '275', cca3: 'PSE', …}
// 48
// : 
// {name: {…}, tld: Array(1), cca2: 'BT', ccn3: '064', cca3: 'BTN', …}
// 49
// : 
// {name: {…}, tld: Array(1), cca2: 'IQ', ccn3: '368', cca3: 'IRQ', …}
// length
// : 
// 50
// [[Prototype]]
// : 
// Array(0)
// ﻿

