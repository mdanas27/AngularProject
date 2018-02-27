//define string 
var str = "123,124,234,252";

//string to Array
var strArray = str.split(",");

//set value of i 
var i = 0;

//while loop
while (i<strArray.length) {
    console.log(strArray[i]); // print array value
    //+1 and do checking on next ++
    i++;    
}