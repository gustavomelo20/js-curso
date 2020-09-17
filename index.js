
var name = document.querySelector("#exampleInputName");
var gender = document.querySelectorAll("#form-user-create [name=gander]:checked");
var birth = document.querySelector("#exampleInputBirth");
var country = document.querySelector("#exampleInputCountry");
var email = document.querySelector("#exampleInputEmail"); 
var passworld = document.querySelector("#exampleInputPassworld");
var file = document.querySelector("#exampleInputFile");
var admin = document.querySelector("#exampleInputAdmin");
var fields = document.querySelectorAll("#form-user-create [name]");
var  user = {};

function addLine(dataUser);

document.getElementById("form-user-create").addEventListener("submit", function(envet){

    envet.preventDefault();


    fields.forEach(function(field, index){

	if (field.name == "gender"){
		if (field.checked === true)
		 user[field.name] = field.value;
	} else {
		 user[field.name] = field.value;
	}

    ;

    });

    addLine(user); 
	 
});

