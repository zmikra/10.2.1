document.addEventListener('DOMContentLoaded', function () {
    let localdata= document.getElementById("data");
    let getdata = localStorage.getItem("getdata");

    if (getdata) {
        localdata.textContent = getdata;
    }
});
