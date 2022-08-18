$(document).ready(function() {
    // Add active class on hovered item
    let menu = document.querySelectorAll('li')
    for (let i = 0; i < menu.length; i++) {
        menu[i].onmouseover = function() {
            let j = 0
            while (j < menu.length) {
                menu[j++].className = 'menu'
            }
            menu[i].className = 'menu ativo'
        }
    }

    // Change body color according to indicator
    menu.forEach(elements => {
        elements.addEventListener('mouseenter', function(event) {
            let bg = document.querySelector('body')
            let color = event.target.getAttribute('data-cor')
            bg.style.backgroundColor = color
        })
    })
})