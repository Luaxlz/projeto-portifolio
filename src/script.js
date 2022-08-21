$(document).ready(function() {
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

    $('.nav-bar a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        let id = $(this).attr('href'),
                targetOffset = $(id).offset().top;
                
        $('html, body').animate({ 
            scrollTop: targetOffset
        }, 500);
    });
})