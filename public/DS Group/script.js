
function signup() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let msg = document.getElementById("signupMsg");

    if (name == "" || email == "" || password == "") {

        msg.style.color = "red";
        msg.innerHTML = "Please fill all fields.";

    }
    else {

        msg.style.color = "green";
        msg.innerHTML = "Signup Successful.";

    }

}


function login() {

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let msg = document.getElementById("loginMsg");

    if (email == "" || password == "") {

        msg.style.color = "red";
        msg.innerHTML = "Please fill all fields.";

    }
    else {

        msg.style.color = "green";
        msg.innerHTML = "Login Successful.";

    }

}