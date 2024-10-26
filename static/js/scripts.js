// const appMenu = document.querySelector(".app-sidebar_menu")
const appMenuitem = document.querySelectorAll(".app-sidebar_menu-item")

appMenuitem.forEach(menuItem => {
    if(menuItem.children[0].href === window.location.href) {
        menuItem.children[0].classList.add("active")
    }
})