window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    
    menuItem = document.querySelectorAll('.menu_item'),
    gumb = document.querySelector('.gumb');

    gumb.addEventListener('click', () => {
        gumb.classList.toggle('gumb_active');
        if(menu !== null){
            menu.classList.toggle('menu_active');
        }
        else
        {
            throw new Error("no object found!");
        }
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            gumb.classList.toggle('gumb_active');
            menu.classList.toggle('menu_active');
        })
    })
})