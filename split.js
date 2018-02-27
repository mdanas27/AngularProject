var str = "123,124,234,252";
var strArray = str.split(",");

//display array all index
// console.log(strArray); 

//display one index
// console.log(strArray[2]); 

//array value
var i = strArray;

//diplay array to string
console.log(i.toString());

// for loop array to string
for (let i = 0; i < strArray.length; i++) {
    var strOutput = strArray[i];
    console.log(strOutput);
}
