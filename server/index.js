import pkg from 'lodash';
const{chunk}=pkg;
var num1=14;
var num2=15 ;
var result=num1+num2;
console.log(result);
var array1=[10,20,30,40,50,60];
var chunkedArray=chunk(array1,2)
console.log(chunkedArray);