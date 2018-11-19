function MenuItem(name, kCal, Allergen, Price) {
    this.name = name; // The this keyword refers to the object itself
    this.kCal = kCal;
    this.Allergen = Allergen;
    this.Price = Price;
    this.Product = function() {
        return this.name + ': ' + this.kCal + ', ' + this.Allergen + ', ' + this.Price;
    };
};

// Objects are then instantiated using the new keyword
var MI1 = new MenuItem('Burger1', 200, 'Lactose & Gluten', 10);
var MI2 = new MenuItem('Burger2', 150, 'Lactose', 15);
var MI3 = new MenuItem('Burger3', 100, 'Lactose & Gluten', 20);
var MI4 = new MenuItem('Burger4', 200, 'None', 12);
var MI5 = new MenuItem('Burger5', 100, 'None', 10);

var burgers = new Array();
	burgers[0] = MI1;
	burgers[1] = MI2;
	burgers[2] = MI3;
	burgers[3] = MI4;
	burgers[4] = MI5;

// 这里是把数组打印在屏幕上，实际任务要求是输入进html文件里
// Now instead of adding each element separately to your div element, 
// use a loop to iterate through the order array and add the orders to the HTML div within your loop. 
for (i = 0; i < burgers.length; i++)
{
	document.write(burgers[i].name + ": kCal: " + burgers[i].kCal + ", Allergen: " + burgers[i].Allergen + ", Price: " + burgers[i].Price + "<br><br>");
}

           
document.getElementById("box_a").innerHTML = "Burger 1";
document.getElementById("box_b").innerHTML = "Burger 2";
document.getElementById("box_c").innerHTML = "Burger 3";
document.getElementById("desc1.1").innerHTML = "Best Burger in the world!";
document.getElementById("desc1.2").innerHTML = "Contains lactose";
document.getElementById("desc1.3").innerHTML = "Contains gluten";
document.getElementById("desc2.1").innerHTML = "Best Burger in the world!";
document.getElementById("desc2.2").innerHTML = "Contains lactose";
document.getElementById("desc3.1").innerHTML = "Best Burger in the world!";
document.getElementById("desc3.2").innerHTML = "Contains lactose";
document.getElementById("desc3.3").innerHTML = "Contains gluten";


// Write "Button clicked!" on the command line****************************************************************
var orderButton = document.getElementbyId('OrderButton');

//
function OutputText(){
    console.log("Button clicked!");
};
orderButton.addEventListener("click", OutputText);


// Read values****************************************************************
var Customers = new array();    // All the users information

function Information(fullname, gender, email, pm){ // Single user information
    this.fullname = fullname;
    this.gender = gender;
    this.email = email;
    this.payment_method = pm;
}

for (AmountOfUsers = 0; ;AmountOfUsers++){
    function ReadValues(){   
    //  Read value from dropdown list
        var ddl = document.getElementById("DropDownList");   
        var value = ddl.value;  /* get value of the current chosen option */
        var options = ddl.options;  /* get all the options */ 
        var index = ddl.selectedText;  /* get index of the current chosen option */
        var selectedText = options[index].text; /* get text of the current chosen option */

        Information.payment_method = selectedText;    // put payment method into this object
        
    //  Read values from text fields, and then give it to the Information object
        Information.fullname = document.getElementById("fullname").value;
        Information.email = document.getElementById("email").value;
    
    //  Read values from radio buttons, and then give it to the Information object
        function checksubmit()
        {
            if( !GetRadioValue('gender') ){
                alert("You haven't chosen any option!");
            }
        }
        
        var obj = document.getElementsByName("gender");
        if(obj != null){
            var i; 
            for(i = 0; i < obj.length; i++){
                if(obj[i].checked) {
                    Information.gender = obj[i].value;   // Put gender into object
                }
            }
        }
        return null;
    }

    Customers[AmountOfUsers] = Information; // Create a new user in all the users object
}

document.getElementById('CustomerName').innerHTML = Customers[AmountOfUsers].fullname;
document.getElementById('CustomerEmail').innerHTML = Customers[AmountOfUsers].email;
document.getElementById('CustomerGender').innerHTML = Customers[AmountOfUsers].gender;
document.getElementById('CustomerPaymentMethod').innerHTML = Customers[AmountOfUsers].payment_method;

// checkbox
var ChosenCheckbox = document.getElementsByName('checkbox'); // 遍历所有checkbox，选出被选中的checkbox写入数组
var value = new Array();
for(var i = 0; i < ChosenCheckbox.length; i++){
    if(ChosenCheckbox[i].checked)
    value.push(ChosenCheckbox[i].value);
}
//alert(value);






