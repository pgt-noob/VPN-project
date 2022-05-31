const header = document.querySelector('header');
const menuBtn = document.querySelector('.res__menu-icon');
const menuDetail = document.querySelector('.header__responsive-menu__detail');
header.addEventListener('click', handleMenuBtn);
function handleMenuBtn (e) {
    e.stopPropagation();
    console.log(e.target)
    if (e.target.matches('.res__menu-icon')) {
        menuDetail.classList.toggle('is-shown')
    }
}
document.body.addEventListener('click',function () {
    menuDetail.classList.remove('is-shown')
})