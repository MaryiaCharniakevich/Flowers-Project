var menuList = document.getElementById('menulist')
menuList.style.maxHeight = '0px'

function toggleOpenMenu() {
    (menuList.style.maxHeight == '0px') 
      ? menuList.style.maxHeight = '130px'
      : menuList.style.maxHeight = '0px'
}