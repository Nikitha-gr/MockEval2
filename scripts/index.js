
let form = document.getElementById("login");
form.addEventListener("submit",function () {
        //event.preventDefault();
        let email = form.email.value;
        let password = form.password.value;
        console.log(email, password);

        if (email == "empher@gmail.com") {
            if (password == "empher@123") {
                window.location.href = "quiz.html";
                alert("Login Success, you are redirecting to quiz page");
            }
            else {
                alert("Wrong Password Try Again");
            }
        }
        else {
            alert("Login Failure, Email incorrect");
        }
    })

