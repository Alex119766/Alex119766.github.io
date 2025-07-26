function validateTxt() {
    let isValid = true;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let mark1 = document.getElementById("mark1").value;
    let mark2 = document.getElementById("mark2").value;
    let mark3 = document.getElementById("mark3").value;

    //First Name
    if (firstName === "" || firstName === " ") {
        document.getElementById("firstNameError").innerText = "First Name is mandatory";
        isValid = false;
    }
    else {
        document.getElementById("firstNameError").innerText = "";
    }

    //Last Name
    if (lastName === "" || lastName === " " ) {
        document.getElementById("lastNameError").innerText = "Last Name is mandatory";
        isValid = false;
    }
    else {
        document.getElementById("lastNameError").innerText = "";
    }

    //Mark1
    if (mark1 === ""  || mark1 < 0 || mark1 > 100) {
        document.getElementById("mark1Error").innerText = "Only marks between (0-100).";
        isValid = false;
    }
    else {
        document.getElementById("mark1Error").innerText = "";
    }
    //Mark2
    if (mark2 === "" || mark2 < 0 || mark2 > 100) {
        document.getElementById("mark2Error").innerText = "Only marks between (0-100).";
        isValid = false;
    }
    else {
        document.getElementById("mark2Error").innerText = "";
    }
    //Mark3
    if (mark3 === "" || mark3 < 0 || mark3 > 100) {
        document.getElementById("mark3Error").innerText = "Only marks between (0-100).";
        isValid = false;
    }
    else {
        document.getElementById("mark3Error").innerText = "";
    }

    return isValid;
}

function printResult() {
    let FinalResult = document.getElementById("result");
    //checking if the input is valid
    if (validateTxt() == false) {
        FinalResult.innerText = "";
        return;
    }
    let grade = "";
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let mark1 = Number(document.getElementById("mark1").value);
    let mark2 = Number(document.getElementById("mark2").value);
    let mark3 = Number(document.getElementById("mark3").value);
    //analizing the grade
    let average = Math.round((mark1 + mark2 + mark3) / 3);
    if (average >= 90) {
        grade = "Awesome";
    } else if (average >= 80 && average < 90) {
        grade = "Very good";
    } else if (average >= 50 && average < 80) {
        grade = "OK";
    } else {
        grade = "Fail";
    }
    FinalResult.innerText = `${firstName} ${lastName} - Average: ${average} - Grade: ${grade}`;
}