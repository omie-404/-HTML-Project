document.getElementById('my_form').addEventListener('submit', function(e){
    e.preventDefault();
    validateInput();
});

function validateInput(){
    const inputField = document.getElementById("inputField");
    const inputValue = inputField.value.trim();
    const errorMessage = document.getElementById("errorMessage");

    if(inputValue === ""){
        inputField.classList.add("shake");
        errorMessage.style.visibility = "visible";

        setTimeout(function(){
            inputField.classList.remove("shake");
            errorMessage.style.visibility = "hidden";
        },500);
    } else {
        alert("Tum Bade bakchod ho");
    }
}