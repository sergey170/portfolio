function burgHedMain() {

    let hedBtn = document.querySelector('.header__burger');
    let hedNav = document.querySelector('.header__nav');

    hedBtn.onclick = function () {
        if (hedNav.style.top == -500 +"px") {
            hedNav.style.top = 79 +"px";
        } else {
            hedNav.style.top = -500 +"px";
        }
    }
    let mainNav = document.querySelector('.main__header-nav');
    let mainBtn = document.querySelector('.m-bg');

    mainBtn.onclick = function () {
        if (mainNav.style.top == -800 +"px") {
            mainNav.style.top = 80 +"px";
        } else {
            mainNav.style.top = -800 +"px";
        }
    }
};
burgHedMain();
//--------------------------------
