var dropdown = document.getElementsByClassName("content__nav__dropdown");
var toggle = document.getElementsByClassName("toggle");
var content__nav = document.getElementsByClassName("content__nav");
let dropdownContent1;
let dropdownContent2;

function togg() {
    if (content__nav[0].style.display === "none") {
        content__nav[0].style.display = "block";
    } else {
        content__nav[0].style.display = "none";
    }
}

dropdown[0].addEventListener("click", function () {
    this.classList.toggle("active");
    dropdownContent1 = this.nextElementSibling;
    if (dropdownContent1.style.display === "block") {
        dropdownContent1.style.display = "none";
    } else {
        dropdownContent1.style.display = "block";
        dropdownContent2.style.display = "none";
    }
});

dropdown[1].addEventListener("click", function () {
    this.classList.toggle("active");
    dropdownContent2 = this.nextElementSibling;
    if (dropdownContent2.style.display === "block") {
        dropdownContent2.style.display = "none";
    } else {
        dropdownContent2.style.display = "block";
        dropdownContent1.style.display = "none";
    }
});