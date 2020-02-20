var desserts = [
    {
        id: 0,
        img_src: 'img/cupcake-cherry.png',
        text: 'Cupcake',
        price: 'Od 99rsd/kom',
        color: '#b7e1fe'
    },
    {
        id: 1,
        img_src: 'img/cookie.png',
        text: 'Cookie',
        price: 'Od 70rsd/kom',
        color: '#f5e9aa'
    },
    {
        id: 2,
        img_src: 'img/donut-2.png',
        text: 'Krofne',
        price: 'Od 59rsd/kom',
        color: '#e4b8ca'
    },
    {
        id: 3,
        img_src: 'img/ice-cream-cup.png',
        text: 'Sladoled',
        price: 'Od 69rsd/kugla',
        color: '#b6e2dd'
    }
];

var bestseller = [
    {
        img_src: 'img/cookie.png',
        text: 'Cookie - Classic',
        color: '#f5e9aa'
    },
    {
        img_src: 'img/cucpake-right.png',
        text: 'Cupcake - Borovnica',
        color: '#e4b8ca'
    },
    {
        img_src: 'img/ice-cream-togo.png',
        text: 'Sladoled - Malina',
        color: 'bisque'
    },
    {
        img_src: 'img/cupcake-vanilla.png',
        text: 'Cupcake - Vanila',
        color: '#F3F4F0'
    },
    {
        img_src: 'img/ice-tea.png',
        text: 'Ledeni čaj - Limun',
        color: '#ffc6b6'
    },
    {
        img_src: 'img/choco-smoothie.png',
        text: 'Smootie - Čokolada',
        color: '#EDB18D'
    }
];

var id = 0;
var headerImg = document.querySelector('.header__hero');
var headerText = document.querySelector('.heading-primary--main');
var headerPrice = document.querySelector('.heading-primary--sub');

function changeHeaderInfo() {
    id++;
    if (id > desserts.length - 1) {
        id = 0;
    }
    $('.header__hero').animate(
        {
            opacity: 0
        },
        500,
        () => {
            $('.header__background-box').animate(
                {
                    opacity: 0
                },
                200,
                () => {
                    $('.header__background-box').css({
                        'background-image': `linear-gradient(
                            to right,
                            #fff 0,
                            #fff 50%,
                            ${desserts[id].color} 50%,
                            ${desserts[id].color} 100%)`
                    });
                    $('.header__background-box').animate({ opacity: 1 }, 200, () => {
                        $('.btn').css({
                            'background-color': `${desserts[id].color}`
                        });
                        headerImg.src = desserts[id].img_src;
                        headerText.innerHTML = desserts[id].text;
                        headerPrice.innerHTML = desserts[id].price;
                        $('.header__hero').animate(
                            {
                                opacity: 1
                            },
                            500
                        );
                    });
                }
            );
        }
    );
}

$('.forward').click(() => {
    id++;
    if (id > desserts.length - 1) {
        id = 0;
    }
    clearInterval(timer);
    console.log(id);
    $('.header__hero').animate(
        {
            opacity: 0
        },
        500,
        () => {
            $('.header__background-box').animate(
                {
                    opacity: 0
                },
                200,
                () => {
                    $('.header__background-box').css({
                        'background-image': `linear-gradient(
                            to right,
                            #fff 0,
                            #fff 50%,
                            ${desserts[id].color} 50%,
                            ${desserts[id].color} 100%)`
                    });
                    $('.header__background-box').animate({ opacity: 1 }, 200, () => {
                        $('.btn').css({
                            'background-color': `${desserts[id].color}`
                        });
                        headerImg.src = desserts[id].img_src;
                        headerText.innerHTML = desserts[id].text;
                        headerPrice.innerHTML = desserts[id].price;
                        $('.header__hero').animate(
                            {
                                opacity: 1
                            },
                            500
                        );
                    });
                }
            );
        }
    );
    timer = setInterval(changeHeaderInfo, 6000);
});

$('.back').click(() => {
    id--;
    if (id < 0) {
        id = desserts.length - 1;
    }
    clearInterval(timer);
    console.log(id);
    $('.header__hero').animate(
        {
            opacity: 0
        },
        500,
        () => {
            $('.header__background-box').animate(
                {
                    opacity: 0
                },
                200,
                () => {
                    $('.header__background-box').css({
                        'background-image': `linear-gradient(
                            to right,
                            #fff 0,
                            #fff 50%,
                            ${desserts[id].color} 50%,
                            ${desserts[id].color} 100%)`
                    });
                    $('.header__background-box').animate({ opacity: 1 }, 200, () => {
                        $('.btn').css({
                            'background-color': `${desserts[id].color}`
                        });
                        headerImg.src = desserts[id].img_src;
                        headerText.innerHTML = desserts[id].text;
                        headerPrice.innerHTML = desserts[id].price;
                        $('.header__hero').animate(
                            {
                                opacity: 1
                            },
                            500
                        );
                    });
                }
            );
        }
    );
    timer = setInterval(changeHeaderInfo, 6000);
});

function renderBest(boxes, img, text) {
    for (let index = 0; index < boxes.length; index++) {
        boxes[index].style.backgroundColor = bestseller[index].color;
        img[index].src = bestseller[index].img_src;
        text[index].innerHTML = bestseller[index].text;
    }
}

function carousel() {
    var bestBoxes = document.querySelectorAll('.bestsellers__item');
    var bestImg = document.querySelectorAll('.bestsellers__image');
    var bestText = document.querySelectorAll('.bestsellers__name');
    var arrowsBtn = document.querySelectorAll('.bestsellers__arrow');

    renderBest(bestBoxes, bestImg, bestText);

    arrowsBtn[0].onclick = () => {
        var tmp = bestseller.shift();
        bestseller = [...bestseller, tmp];
        renderBest(bestBoxes, bestImg, bestText);
    };

    arrowsBtn[1].onclick = () => {
        var tmp = bestseller.pop();
        bestseller = [tmp, ...bestseller];
        renderBest(bestBoxes, bestImg, bestText);
    };
}

var timer = setInterval(changeHeaderInfo, 6000);
window.onload = function() {
    carousel();
};
