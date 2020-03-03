let click = document.querySelector(".tag");
let drop = document.getElementById("dropdown");
let alert = document.getElementById("alert");
let check = document.getElementsByClassName("check");
let alertOK = document.getElementById("alert_button");
let counter = 0;

click.onclick = function() {
    drop.style.display = "block";
};

window.onclick = function(event) {
    if (event.target == drop) {
        for (let i = 0; i < check.length; i++) {
            if (!check[i].checked) {
                counter++;
                if (counter == check.length) {
                    alert.style.display = "block";
                    counter = 0;
                }
            }
        }
        drop.style.display = "none";
    }
};

alertOK.onclick = function() {
    drop.style.display = "block";
    alert.style.display = "none";
};