function submitForm() { //prints input value to output div
    var first = document.getElementById("firstN").value;
    var firstName = document.getElementById("firstNa");
    firstName.innerHTML = first;

    var lastN = document.getElementById("lastN").value;
    var lastName = document.getElementById("lastNa");
    lastName.innerHTML = lastN;

    var email = document.getElementById("email").value;
    var emailDrop = document.getElementById("emailDrop").value;
    var emailAdd = document.getElementById("emailAddr");
    emailAdd.innerHTML = email + "@" + emailDrop + ".com";

    var phoneN = document.getElementById("phoneNum").value;
    var phoneNum = document.getElementById("phoneNumb");
    phoneNum.innerHTML = phoneN;

    var age = document.getElementById("age").value;
    var ageYrs = document.getElementById("ageYrs");
    ageYrs.innerHTML = age;

    var secret = document.getElementById("secretA").value;
    var secretA = document.getElementById("secretAn");
    secretA.innerHTML = secret;

    var message = document.getElementById("message").value;
    var messageBox = document.getElementById("messageBox");
    messageBox.innerHTML = message;

    var contact = document.getElementsByClassName("form-check-input");
    var contactPref = document.getElementById("contactPref");
    for(var i = 0; i < contact.length; i++) {
        if(contact[i].checked) {
        contactPref.innerHTML = contact[i].value;
    }
}

    var income = document.getElementById("income").value;
    var incomeAmt = document.getElementById("incomeAmt");
    incomeAmt.innerHTML = income;

    var confirm = document.getElementById("confirm");
    var confirmation = document.getElementById("confirmation");
    if(confirm.checked) {
        confirmation.innerHTML = "Yes!";
    } else {
        confirmation.innerHTML = "No!";
    } 
}