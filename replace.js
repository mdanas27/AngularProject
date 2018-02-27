var data = {
      
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
          {
                "batter":
                      [
                             { "id": "1001", "type": "Regular" },
                             { "id": "1002", "type": "Chocolate" },
                             { "id": "1003", "type": "Blueberry" },
                             { "id": "1004", "type": "Devil's Food" }
                      ]
          },
    "topping":
          [
                { "id": "5001", "type": "None" },
                { "id": "5002", "type": "Glazed" },
                { "id": "5005", "type": "Sugar" },
                { "id": "5007", "type": "Powdered Sugar" },
                { "id": "5006", "type": "Chocolate with Sprinkles" },
                { "id": "5003", "type": "Chocolate" },
                { "id": "5004", "type": "Maple" }
          ]
};

var topping = data.topping;

//replace o to t
for (var i = 0; i<topping.length; i++) {
    
    var toppingOutput = topping[i].type;
    //console.log(toppingOutput);

    //replace character o and e
    var replace = toppingOutput.replace(/o/g,"T").replace(/e/g,"Z");
    
    var result = replace;
//     console.log(result+"("+ toppingOutput+")");
    console.log(toppingOutput + " | " + result); //concat
}