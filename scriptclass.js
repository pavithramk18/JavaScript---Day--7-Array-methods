console.log("Class Practise");

//MAP METHOD
// let arr=[{name:"John",marks:25},{name:"Thiru",marks:90}];
// //Increase the mark of each student of 10 marks by using map method
// var result=arr.map((element)=>element.marks+10);

// console.log(result);

//FILTER METHOD

let arr=[{name:"John",marks:40},{name:"Thiru",marks:10},{name:"pavi",marks:77}];

var result=arr.filter((ele)=>ele.marks>35);
console.log(result);
var r=result.map((ele1)=>ele1.name);
console.log(r);