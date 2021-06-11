
function burgHed() {

    let hedBtn = document.querySelector('.header__burger');
    let hedNav = document.querySelector('.header__nav');

    hedBtn.onclick = function () {
        if (hedNav.style.top == -400 +"px") {
            hedNav.style.top = 79 +"px";

        } else {
     hedNav.style.top = -400 +"px";

        }
    }
}
    burgHed();
    //----------------------------
let popBtn = document.querySelector('.popap__btn');
let kontBtn = document.querySelector('#kon-bt');
let popap = document.querySelector('.popap');

popBtn.onclick = function () {
     popap.style.top = -500 + "px";
}
kontBtn.onclick = function () {
    popap.style.top = 0 + "px";
}