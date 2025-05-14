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

//open - close sidebar
document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const menu = document.querySelector('.sidebar_main .menu');
    const closeBtn = document.querySelector('.secvice-close');
    const sidebar = document.querySelector('.sidebar_main');
    const servicesArea = document.querySelector('.services_area.open');

    const headerOffset = header ? header.offsetTop : 0;
    const menuOffset = menu ? menu.offsetTop : 0;

    // Sticky header
    window.addEventListener('scroll', function () {
        if (header) {
            if (window.scrollY > headerOffset) {
                header.classList.add('fixed-header');
            } else {
                header.classList.remove('fixed-header');
            }
        }
    });

    // Hàm đóng sidebar và services area
    function closeSidebarAndServices() {
        if (sidebar) sidebar.classList.remove('active'); 
        const openServices = document.querySelector('.services_area.open');
        if (openServices) openServices.classList.remove('open');
    }

    // Gắn sự kiện click cho nút close
    if (closeBtn) {
        closeBtn.addEventListener('click', closeSidebarAndServices);
    }
});
