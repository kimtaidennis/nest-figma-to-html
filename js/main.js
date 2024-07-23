const toggleBtn = document.querySelector('.menu-toggle-icon')
const menuDiv = document.querySelector('#menu-toggle')
toggleBtn.addEventListener('click',() => {
    menuDiv.classList.toggle('hidden')
})