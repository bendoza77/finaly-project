const myForm = document.getElementById("myForm");
const email = document.getElementById("email");
const result = document.getElementById("result");

myForm.addEventListener("submit", function(e) {
    e.preventDefault();

    if(myForm.email.value.trim() === ""){
        email.style.border = "1px solid red";
        result.textContent = "This can't be empty";
    } else{
        email.style.border = "none";
        result.textContent = "";
        myForm.reset();
    }
})