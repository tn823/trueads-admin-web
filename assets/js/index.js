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


document.addEventListener("DOMContentLoaded", function () {
    const iconAction = document.querySelector(".icon-action");
    const listMenu = document.querySelector(".list-menu-setting");
    let hideTimeout;

    if (iconAction && listMenu) {
        const showMenu = () => {
            clearTimeout(hideTimeout);
            listMenu.classList.remove("hidden");
        };

        const hideMenu = () => {
            hideTimeout = setTimeout(() => {
                listMenu.classList.add("hidden");
            }, 300); // delay 300ms
        };

        iconAction.addEventListener("mouseenter", showMenu);
        iconAction.addEventListener("mouseleave", hideMenu);
        listMenu.addEventListener("mouseenter", showMenu);
        listMenu.addEventListener("mouseleave", hideMenu);
    }
});
  
document.addEventListener("DOMContentLoaded", function () {
    const tabMenu = document.querySelector(".table-header .tab-menu");
    const tableHeaderMenu = document.querySelector(".table-header-menu");
    let hideTimeout;

    if (tabMenu && tableHeaderMenu) {
        const showMenu = () => {
            clearTimeout(hideTimeout);
            tableHeaderMenu.classList.remove("hidden");
        };

        const hideMenu = () => {
            hideTimeout = setTimeout(() => {
                tableHeaderMenu.classList.add("hidden");
            }, 400); // delay 300ms
        };

        tabMenu.addEventListener("mouseenter", showMenu);
        tabMenu.addEventListener("mouseleave", hideMenu);
        tableHeaderMenu.addEventListener("mouseenter", showMenu);
        tableHeaderMenu.addEventListener("mouseleave", hideMenu);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const tabMenu = document.querySelector(".table-btn-setting");
    const tableHeaderMenu = document.querySelector(".btn-action-setting");
    let hideTimeout;

    if (tabMenu && tableHeaderMenu) {
        const showMenu = () => {
            clearTimeout(hideTimeout);
            tableHeaderMenu.classList.remove("hidden");
        };

        const hideMenu = () => {
            hideTimeout = setTimeout(() => {
                tableHeaderMenu.classList.add("hidden");
            }, 400); // delay 300ms
        };

        tabMenu.addEventListener("mouseenter", showMenu);
        tabMenu.addEventListener("mouseleave", hideMenu);
        tableHeaderMenu.addEventListener("mouseenter", showMenu);
        tableHeaderMenu.addEventListener("mouseleave", hideMenu);
    }
});




    document.addEventListener("DOMContentLoaded", function () {
  const mediaImages = document.querySelectorAll(".row.media .list-media .item-media img");
    const infoMedia = document.querySelector(".info-media.card");
    const backdrop = document.querySelector(".media-modal-backdrop");

    if (!infoMedia || !backdrop) return;

    // Hiển thị khi click ảnh
    mediaImages.forEach(function (img) {
        img.addEventListener("click", function () {
            infoMedia.classList.remove("hidden");
            backdrop.classList.remove("hidden");
        });
  });

    // Ẩn khi click nút close
    const closeBtn = infoMedia.querySelector(".btn-action button");
    if (closeBtn) {
        closeBtn.addEventListener("click", function () {
            infoMedia.classList.add("hidden");
            backdrop.classList.add("hidden");
        });
  }
});



  