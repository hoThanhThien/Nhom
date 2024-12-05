// JavaScript để xử lý hover và scroll
const sections = document.querySelectorAll('.content-section'); // Chọn các phần nội dung
const menuLinks = document.querySelectorAll('.menu-link'); // Chọn các liên kết trong menu

// Hàm để kiểm tra phần nào đang ở trong view
function activateMenuOnScroll() {
    let index = sections.length;

    while (--index && window.scrollY + 50 < sections[index].offsetTop) {} // Tính vị trí hiện tại

    // Loại bỏ class 'active' khỏi tất cả liên kết menu
    menuLinks.forEach(link => link.classList.remove('active'));

    // Thêm class 'active' vào liên kết tương ứng
    menuLinks[index].classList.add('active');
}

// Gắn sự kiện scroll
window.addEventListener('scroll', activateMenuOnScroll);

// Thêm sự kiện hover để cuộn đến phần tương ứng
menuLinks.forEach(link => {
    link.addEventListener('mouseover', event => {
        const targetId = link.getAttribute('href').substring(1); // Lấy ID phần cần cuộn tới
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' }); // Cuộn mượt mà
    });
});

// Thêm smooth scroll khi click vào menu
menuLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Ngăn chặn hành vi mặc định
        const targetId = link.getAttribute('href').substring(1); // Lấy ID phần cần cuộn tới
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' }); // Cuộn mượt mà
    });
});
