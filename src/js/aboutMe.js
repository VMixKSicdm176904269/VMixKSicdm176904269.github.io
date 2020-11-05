//Создаёт элементы на странице
const CreatesElementsOnThePage =
    {
        createsLine:(goal)=>
        {
            document.querySelector(goal)
                .insertAdjacentHTML('afterend', "<div class='line'><div class='inner-line'></div></div>");
        },
    }

main();
//Вызывает все запускающие функции и инциализаторы объектов/переменных
function main()
{
    for (let i = 0; i < 1; ++i)
    {
        CreatesElementsOnThePage.createsLine(`.line${i+1}`);
    }
}