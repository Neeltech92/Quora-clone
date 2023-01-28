import {navList} from "/data.js"

const navItems = document.getElementById("nav-items")
let itemContainer = ``
function renderNavList() {
  navList.forEach(function(item){
   itemContainer  += `<li>${item}</li>`
  })
  navItems.innerHTML = itemContainer
}

renderNavList()