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
  


document.addEventListener('DOMContentLoaded', function () {
const tabs = document.querySelectorAll('.thesanpham .tabs .tab');

tabs.forEach(tab => {
    tab.addEventListener('click', function () {
    // Bỏ class active-tab ở tất cả tab
    tabs.forEach(t => t.classList.remove('active-tab'));
    
    // Thêm class active-tab vào tab được click
    this.classList.add('active-tab');
    });
});
});

