//Создаёт элементы на странице
const CreatesObjectsOnThePage =
{
    create_btn:()=>
    {
        let main = document.querySelector("main");
        main.insertAdjacentHTML('beforeend',"" +
            "<a href='#promo' class='btn btn__up'> <img class='btn__img btn__img-up' src='icons/uparrow.svg' alt='up'> </a>" +
            "<a href='#footer' class='btn btn__down'> <img class='btn__img btn__img-down' src='icons/uparrow.svg' alt='down'> </a>"
        );
    }
}

//события с элементами
const doings =
{
    smoothScrolling:()=>
    {
        document.querySelector(".btn__up").addEventListener('click', item =>
        {
            item.preventDefault();
            document.querySelector("#promo").scrollIntoView({block: "center", behavior: "smooth"});
        });
        document.querySelector(".btn__down").addEventListener('click', item =>
        {
            item.preventDefault();
            document.querySelector("#footer").scrollIntoView({block: "center", behavior: "smooth"});
        });
    },
    DeleteContainer:()=>
    {
        if (screen.width < 576)
        {
            document.querySelector(`.header`).firstElementChild.classList.remove('container');
        }
        else if (screen.width > 576)
        {
            document.querySelector(`.header`).firstElementChild.classList.add('container');
        }
    }
}

main();
//Вызывает все запускающие функции и инциализаторы объектов/переменных
function main()
{
    CreatesObjectsOnThePage.create_btn();
    doings.smoothScrolling();
    doings.DeleteContainer();
    let timerId = setInterval(doings.DeleteContainer, 1000);
}