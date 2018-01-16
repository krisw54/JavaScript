
let btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener('click', validate);

//fields to be validated
let txtName = document.getElementById("name");
let txtMessage = document.getElementById("message");
let txtEmail = document.getElementById("email");
let txtPhoneNo = document.getElementById("phoneNo");
let errorMessage = document.getElementById("errorMess");

let valid;

function validate(){
    valid = true;
    testFullName();
    testPhoneNumber();
    testMessage();
    testEmail();
    
    if (!valid){
        event.preventDefault();
    } else {
        //alert("Sending Information");
    }
}

function testFullName(){
    if (!Modernizr.input.required) {
        if (txtName.value.length == 0) {
            txtName.setAttribute("class", "omitted");
            errorMessage.removeAttribute("class", "hidden");
            valid = false;
            console.log("not supported");
        } else {
            txtName.removeAttribute("class", "omitted");
        }
    } else {
        console.log("supported");
    }
}

function testEmail(){
    if (!Modernizr.inputtypes.email) {
        var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!emailRegExp.test(txtEmail.value)){
            txtEmail.setAttribute("class", "wrongFormat");
            errorMessage.removeAttribute("class", "hidden");
            valid = false;
        } else {
            txtEmail.removeAttribute("class", "wrongFormat");
        }       
    }
}

function testPhoneNumber(){
    if (!Modernizr.inputtypes.number) {
        if (txtPhoneNo.value.length != 0 && isNaN(txtPhoneNo.value)){
            txtPhoneNo.setAttribute("class", "notNumeric");
            errorMessage.removeAttribute("class", "hidden");
            valid = false;
        } else {
            txtPhoneNo.removeAttribute("class", "notNumeric");
            if (txtPhoneNo.value <13) {
                txtPhoneNo.setAttribute("class", "outsideRange");
                errorMessage.removeAttribute("class", "hidden");
                valid = false;
            } else {
                txtPhoneNo.removeAttribute("class", " outsideRange ");
            }
        }
    }
}

function testMessage(){
    if (!Modernizr.input.required ) {
        if (txtMessage.value.length < 5) {
            txtMessage.setAttribute("class", "omitted");
            errorMessage.removeAttribute("class", "hidden");
            valid = false;
        } else {
            txtMessage.removeAttribute("class", "omitted");
        }
    }
}




