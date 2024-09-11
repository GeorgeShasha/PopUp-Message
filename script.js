let popup = document.getElementById("pop-up");

function openPopUp() {
    popup.classList.add("open-popup");
}

function closePopUp() {
    popup.classList.remove("open-popup");
}

document.getElementById("open-btn").addEventListener("click", openPopUp);
document.getElementById("close-btn").addEventListener("click", closePopUp);