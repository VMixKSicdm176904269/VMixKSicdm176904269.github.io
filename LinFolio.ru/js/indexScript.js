//Создаёт элементы на странице
const CreatesElements =
    {
        gh:
            [
                [
                    [//описания
                        'При фиксированной верстке, сайт отображается абсолютно одинаково на всех устройствах, не зависимо от разрешения.',
                        'При адаптивной верстке с использованием bootstrap ваш сайт будет подстраиваться под все разрешения с каких устройств к вам бы не зашел пользователь.',
                        'Важнейший тип верстки, который отвечает за то, чтобы ваш сайт одинаково красиво выглядел в разных браузерах, коих немало: Chrome, Firefox, Opera, IE, Safari и другие',
                        'При гибкой верстке с помощью CSS свойств Flex, стало значительно легче управлять элементами на странице, и быстро создавать удобные и адаптивные страницы.',
                        'Данный тип верстки берет своё начало от создания стандарта HTML5, теперь можно логически помечать специальные блоки на веб-страницах, повышая сайт в выдаче.',
                        'Это HTML код, который проходит валидацию (проверку) по стандартам консорциума W3C, который занимается развитием HTML, и создает новые стандарты.'
                    ],
                    [//заголовоки
                        'фиксированная верстка',
                        'bootstrap вёрстка',
                        'кроссбраузерная вёрстка',
                        'flex box вёпстка',
                        'семантическая верстка',
                        'валидная вёрстка'
                    ],
                    [//ссылки на иконку
                        'icons/types-of-workbench/graphicdesign2_78420.svg',
                        'icons/types-of-workbench/computer-phone-responsive-design_107057.svg',
                        'icons/types-of-workbench/appdevelopment_78410.svg',
                        'icons/types-of-workbench/graphicdesign_78413.svg',
                        'icons/types-of-workbench/graphicdesign1_78425.svg',
                        'icons/types-of-workbench/workspace_78428.svg'
                    ]
                ],
                [
                    [//описания
                        `Ответственно подхожу к работе, работу делаю как можно лучше, используя весь свой арсенал знаний.`,
                        `Отвечаю в течении минуты в рабочее время, никогда не пропадаю без уважительной причины, что как правило происходит крайне редко.`,
                        `Очень быстро вхожу в курс дел, легко обучаюсь новым технологиям, всегда рад изучить что-то новое и полезное.`,
                        `Я инициативный человек, у которого как правило несколько решений одних и тех же задач.`,
                        `Я всегда стараюсь максимально точно оценивать сроки работ, чтобы не подводить моих коллег.`,
                        `Быстро приступаю к работе и при этом придерживаюсь строго предоставленного ТЗ.`,
                    ],
                    [//заголовоки
                        `ОТВЕТСТВЕННЫЙ`,
                        `всегда на связи`,
                        `легко обучаемый`,
                        `ИНИЦИАТИВНЫЙ`,
                        `укладываюсь в строк`,
                        `работаю чётко по тз`,
                    ],
                    [//ссылки на иконку
                        `icons/pluses/vision_view_eye_icon_153887.svg`,
                        `icons/pluses/center_headphones_call_support_icon_153890.svg`,
                        `icons/pluses/write_pen_sheet_icon_153881.svg`,
                        `icons/pluses/laptop_downloading_icon_153888.svg`,
                        `icons/pluses/clock_time_icon_153883.svg`,
                        `icons/pluses/laptop_upload_icon_153877.svg`,
                    ]
                ]
            ],
        tn:
            [
                [//заголовоки
                    'html+css',
                    'Javascript',
                    'bootstrap',
                    'flex box',
                    'предпроцессор sass',
                    'настоящий адаптив',
                    'pixel perfect',
                    'методалогия бэм',
                ],
                [//ссылки на иконку
                    'icons/technologies/logo1.png',
                    'icons/technologies/logo6.png',
                    'icons/technologies/logo5.png',
                    'icons/technologies/logo7.png',
                    'icons/technologies/logo3.png',
                    'icons/technologies/logo10.png',
                    'icons/technologies/logo8.png',
                    'icons/technologies/logo9.png',
                ]
            ],
        works:
            [
                [
                    ``,
                ],
                [
                    ``,
                ],
                [
                    ``,
                ],
            ],
        create_TypesOfWorkbench:(selector, source, index)=>
        {
            let typesOfWorkbench = document.querySelector(`.tow${index} .container .row`);
            for(let i = 0; i < 6; ++i)
            {
                typesOfWorkbench.insertAdjacentHTML("beforeend", ` 
            <div class="col-sm-6 col-md-6 col-lg-4">
                <div class="${selector}__cover">
                    <div class="${selector}__bg-icon"><img class="${selector}__icon" 
                    src="${CreatesElements.gh[source][2][i]}" alt="${CreatesElements.gh[source][1][i]}"></div>
                    <div class="${selector}__header">${CreatesElements.gh[source][1][i]}</div>
                    <div class="${selector}__desc">${CreatesElements.gh[source][0][i]}</div>
                </div>
            </div>`);
            }
        },
        create_technologies:()=>
        {
            let technologies = document.querySelector(".technologies .container .row");
            for(let i = 0; i < 8; ++i)
            {
                technologies.insertAdjacentHTML("beforeend", ` 
            <div class="col-6 col-sm-6 col-md-3 col-lg-3 p-0">
                <div class="technologies__cover">
                    <img class="technologies__icon"
                        src="${CreatesElements.tn[1][i]}" alt="${CreatesElements.tn[0][i]}">
                    <div class="technologies__header">${CreatesElements.tn[0][i]}</div>
                </div>
            </div>`);
            }
        },
        create_works:()=>
        {
            let works = document.querySelector(".works .container .row");
            for(let i = 0; i < 1; ++i)
            {
                works.insertAdjacentHTML("beforeend",
                    `<div class="col-sm-6 col-md-6 col-lg-4">
            <a href="${CreatesElements.works[2][i]}" class="works__cover">
                <img src="${CreatesElements.works[1][i]}" alt="${CreatesElements.works[0][i]}">
            </a></div>`);
            }
        },
        createsLine:(goal)=>
        {
            document.querySelector(goal)
                .insertAdjacentHTML('afterend', "<div class='line'><div class='inner-line'></div></div>");
        },
    }

//события с элементами
const events =
    {
        hoverOverAnIcon:()=>
        {
            document.querySelectorAll(".technologies__icon").forEach((item) =>
            {
                item.addEventListener('mouseenter', () =>
                {
                    item.classList.add("technologies__icon_increase");
                    item.parentElement.lastElementChild.classList.add("technologies__header_increase");
                });
                item.addEventListener('mouseleave', () =>
                {
                    item.classList.remove("technologies__icon_increase");
                    item.parentElement.lastElementChild.classList.remove("technologies__header_increase");
                });
            });
        },

        smoothScrolling:()=>
        {
            document.querySelector(".link_margin-left").addEventListener('click', item =>
            {
                item.preventDefault();
                document.querySelector("#feedback").scrollIntoView({block: "center", behavior: "smooth"});
            });
        }
    }

main();
//Вызывает все запускающие функции и инциализаторы объектов/переменных
function main()
{
    CreatesElements.create_TypesOfWorkbench("types-of-workbench", 0, 1);
    CreatesElements.create_technologies();
    CreatesElements.create_works();
    CreatesElements.create_TypesOfWorkbench("types-of-workbench", 1, 2);

    events.smoothScrolling();
    events.hoverOverAnIcon();

    for (let i = 0; i < 5; ++i)
    {
        CreatesElements.createsLine(`.line${i+1}`);
    }
}