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

// 0
// : 
// {name: {…}, tld: Array(2), cca2: 'MF', ccn3: '663', cca3: 'MAF', …}
// 1
// : 
// {name: {…}, tld: Array(1), cca2: 'DM', ccn3: '212', cca3: 'DMA', …}
// 2
// : 
// {name: {…}, tld: Array(1), cca2: 'GI', ccn3: '292', cca3: 'GIB', …}
// 3
// : 
// {name: {…}, tld: Array(1), cca2: 'CK', ccn3: '184', cca3: 'COK', …}
// 4
// : 
// {name: {…}, tld: Array(1), cca2: 'NU', ccn3: '570', cca3: 'NIU', …}
// 5
// : 
// {name: {…}, tld: Array(1), cca2: 'SC', ccn3: '690', cca3: 'SYC', …}
// 6
// : 
// {name: {…}, tld: Array(1), cca2: 'TK', ccn3: '772', cca3: 'TKL', …}
// 7
// : 
// {name: {…}, tld: Array(1), cca2: 'FK', ccn3: '238', cca3: 'FLK', …}
// 8
// : 
// {name: {…}, tld: Array(1), cca2: 'VC', ccn3: '670', cca3: 'VCT', …}
// 9
// : 
// {name: {…}, tld: Array(1), cca2: 'AX', ccn3: '248', cca3: 'ALA', …}
// 10
// : 
// {name: {…}, tld: Array(1), cca2: 'GU', ccn3: '316', cca3: 'GUM', …}
// 11
// : 
// {name: {…}, tld: Array(1), cca2: 'AQ', ccn3: '010', cca3: 'ATA', …}
// 12
// : 
// {name: {…}, tld: Array(1), cca2: 'IM', ccn3: '833', cca3: 'IMN', …}
// 13
// : 
// {name: {…}, tld: Array(1), cca2: 'JE', ccn3: '832', cca3: 'JEY', …}
// 14
// : 
// {name: {…}, tld: Array(1), cca2: 'FM', ccn3: '583', cca3: 'FSM', …}
// 15
// : 
// {name: {…}, tld: Array(1), cca2: 'MC', ccn3: '492', cca3: 'MCO', …}
// 16
// : 
// {name: {…}, tld: Array(1), cca2: 'TF', ccn3: '260', cca3: 'ATF', …}
// 17
// : 
// {name: {…}, tld: Array(1), cca2: 'AD', ccn3: '020', cca3: 'AND', …}
// 18
// : 
// {name: {…}, tld: Array(1), cca2: 'VI', ccn3: '850', cca3: 'VIR', …}
// 19
// : 
// {name: {…}, tld: Array(1), cca2: 'SX', ccn3: '534', cca3: 'SXM', …}
// 20
// : 
// {name: {…}, tld: Array(1), cca2: 'MS', ccn3: '500', cca3: 'MSR', …}
// 21
// : 
// {name: {…}, tld: Array(1), cca2: 'GS', ccn3: '239', cca3: 'SGS', …}
// 22
// : 
// {name: {…}, tld: Array(1), cca2: 'BV', ccn3: '074', cca3: 'BVT', …}
// 23
// : 
// {name: {…}, tld: Array(2), cca2: 'SH', ccn3: '654', cca3: 'SHN', …}
// 24
// : 
// {name: {…}, tld: Array(1), cca2: 'AI', ccn3: '660', cca3: 'AIA', …}
// 25
// : 
// {name: {…}, tld: Array(1), cca2: 'GG', ccn3: '831', cca3: 'GGY', …}
// 26
// : 
// {name: {…}, tld: Array(1), cca2: 'KN', ccn3: '659', cca3: 'KNA', …}
// 27
// : 
// {name: {…}, tld: Array(1), cca2: 'SM', ccn3: '674', cca3: 'SMR', …}
// 28
// : 
// {name: {…}, tld: Array(1), cca2: 'PW', ccn3: '585', cca3: 'PLW', …}
// 29
// : 
// {name: {…}, tld: Array(1), cca2: 'PM', ccn3: '666', cca3: 'SPM', …}
// 30
// : 
// {name: {…}, tld: Array(1), cca2: 'AS', ccn3: '016', cca3: 'ASM', …}
// 31
// : 
// {name: {…}, tld: Array(1), cca2: 'AG', ccn3: '028', cca3: 'ATG', …}
// 32
// : 
// {name: {…}, tld: Array(1), cca2: 'CW', ccn3: '531', cca3: 'CUW', …}
// 33
// : 
// {name: {…}, tld: Array(1), cca2: 'GL', ccn3: '304', cca3: 'GRL', …}
// 34
// : 
// {name: {…}, tld: Array(1), cca2: 'VG', ccn3: '092', cca3: 'VGB', …}
// 35
// : 
// {name: {…}, tld: Array(1), cca2: 'WF', ccn3: '876', cca3: 'WLF', …}
// 36
// : 
// {name: {…}, tld: Array(1), cca2: 'LC', ccn3: '662', cca3: 'LCA', …}
// 37
// : 
// {name: {…}, tld: Array(1), cca2: 'UM', ccn3: '581', cca3: 'UMI', …}
// 38
// : 
// {name: {…}, tld: Array(1), cca2: 'SJ', ccn3: '744', cca3: 'SJM', …}
// 39
// : 
// {name: {…}, tld: Array(1), cca2: 'GD', ccn3: '308', cca3: 'GRD', …}
// 40
// : 
// {name: {…}, tld: Array(1), cca2: 'BL', ccn3: '652', cca3: 'BLM', …}
// 41
// : 
// {name: {…}, tld: Array(2), cca2: 'HM', ccn3: '334', cca3: 'HMD', …}
// 42
// : 
// {name: {…}, tld: Array(2), cca2: 'BQ', ccn3: '535', cca3: 'BES', …}
// 43
// : 
// {name: {…}, tld: Array(1), cca2: 'MH', ccn3: '584', cca3: 'MHL', …}
// 44
// : 
// {name: {…}, tld: Array(1), cca2: 'IO', ccn3: '086', cca3: 'IOT', …}
// 45
// : 
// {name: {…}, tld: Array(1), cca2: 'NF', ccn3: '574', cca3: 'NFK', …}
// 46
// : 
// {name: {…}, tld: Array(1), cca2: 'BM', ccn3: '060', cca3: 'BMU', …}
// 47
// : 
// {name: {…}, tld: Array(1), cca2: 'PN', ccn3: '612', cca3: 'PCN', …}
// 48
// : 
// {name: {…}, tld: Array(1), cca2: 'LI', ccn3: '438', cca3: 'LIE', …}
// 49
// : 
// {name: {…}, tld: Array(1), cca2: 'VA', ccn3: '336', cca3: 'VAT', …}
// 50
// : 
// {name: {…}, tld: Array(1), cca2: 'CX', ccn3: '162', cca3: 'CXR', …}
// 51
// : 
// {name: {…}, tld: Array(1), cca2: 'FO', ccn3: '234', cca3: 'FRO', …}
// 52
// : 
// {name: {…}, tld: Array(1), cca2: 'NR', ccn3: '520', cca3: 'NRU', …}
// 53
// : 
// {name: {…}, tld: Array(1), cca2: 'WS', ccn3: '882', cca3: 'WSM', …}
// 54
// : 
// {name: {…}, tld: Array(1), cca2: 'CC', ccn3: '166', cca3: 'CCK', …}
// 55
// : 
// {name: {…}, tld: Array(1), cca2: 'TV', ccn3: '798', cca3: 'TUV', …}
// 56
// : 
// {name: {…}, tld: Array(1), cca2: 'TO', ccn3: '776', cca3: 'TON', …}
// 57
// : 
// {name: {…}, tld: Array(1), cca2: 'AW', ccn3: '533', cca3: 'ABW', …}
// 58
// : 
// {name: {…}, tld: Array(1), cca2: 'KI', ccn3: '296', cca3: 'KIR', …}
// 59
// : 
// {name: {…}, tld: Array(1), cca2: 'TC', ccn3: '796', cca3: 'TCA', …}
// 60
// : 
// {name: {…}, tld: Array(1), cca2: 'KY', ccn3: '136', cca3: 'CYM', …}
// 61
// : 
// {name: {…}, tld: Array(1), cca2: 'MP', ccn3: '580', cca3: 'MNP', …}
// length
// : 
// 62
// [[Prototype]]
// : 
// Array(0)
// ﻿

