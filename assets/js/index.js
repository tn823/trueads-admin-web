// open pop-box
document.addEventListener("DOMContentLoaded", function () {
    const userInfo = document.querySelector(".user-info");
    const popOverlay = document.querySelector(".pop-overlay");
    const popBox = document.querySelector(".pop-box");

    if (userInfo && popOverlay && popBox) {
        userInfo.addEventListener("click", function () {
            popOverlay.classList.remove("hidden");
            popBox.classList.remove("hidden");
        });

        popOverlay.addEventListener("click", function () {
            popOverlay.classList.add("hidden");
            popBox.classList.add("hidden");
        });
    }
});
  

