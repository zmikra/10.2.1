document.addEventListener('DOMContentLoaded', function () {
    let buttonText = document.getElementById("buttonText");
    let inputText = document.getElementById("inputText");

    buttonText.addEventListener("click", function () {
        let values = inputText.value;
        localStorage.setItem("getdata", values);
    });
});
