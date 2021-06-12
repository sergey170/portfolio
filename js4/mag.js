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
        if (mainNav.style.top == -600 +"px") {
            mainNav.style.top = 80 +"px";
        } else {
            mainNav.style.top = -600 +"px";
        }
    }
};
burgHedMain();
//--------------------------------
//------  Попап---------------------------
function popCartSlid() {
    let slidPopap = document.querySelector('.pop-sld');
    let popapBtn2 = document.querySelector('.popap__burget');
   
    let crt1 = document.querySelector('.cart1');
    let crt2 = document.querySelector('.cart2');
    let crt3 = document.querySelector('.cart3');
  
    popapBtn2.onclick = (e) => {
        slidPopap.style.opacity = 0;
    }
    crt1.onclick = () => {
        slidPopap.style.opacity = 1;
    }
    crt2.onclick = () => {
        slidPopap.style.opacity = 1;
    }
    crt3.onclick = () => {
        slidPopap.style.opacity = 1;
    }
};
// popCartSlid();
//-----------конец попап ----------------
//------------ Слайдер ---------------------
function popSlidCart() {
    let stBt1 = document.querySelector('#sl-bt1');
    let stBt2 = document.querySelector('#sl-bt2');
    let stBt3 = document.querySelector('#sl-bt3');
    let stBt4 = document.querySelector('#sl-bt4');
    let stBt5 = document.querySelector('#sl-bt5');
    let stBt6 = document.querySelector('#sl-bt6');

    let slIm1 = document.querySelector('#sl-im1');
    let slIm2 = document.querySelector('#sl-im2');
    let slIm3 = document.querySelector('#sl-im3');
    let slIm4 = document.querySelector('#sl-im4');
    let slIm5 = document.querySelector('#sl-im5');
    let slIm6 = document.querySelector('#sl-im6');

    stBt1.onclick = function (e) {
        slIm1.style.opacity = 1;
        slIm2.style.opacity = 0;
        slIm3.style.opacity = 0;
        slIm4.style.opacity = 0;
        slIm5.style.opacity = 0;
        slIm6.style.opacity = 0;

    }
    stBt2.onclick = function (e) {
        slIm1.style.opacity = 0;
        slIm2.style.opacity = 1;
        slIm3.style.opacity = 0;
        slIm4.style.opacity = 0;
        slIm5.style.opacity = 0;
        slIm6.style.opacity = 0;
    }
    stBt3.onclick = function (e) {
        slIm1.style.opacity = 0;
        slIm2.style.opacity = 0;
        slIm3.style.opacity = 1;
        slIm4.style.opacity = 0;
        slIm5.style.opacity = 0;
        slIm6.style.opacity = 0;
    }
    stBt4.onclick = function (e) {
        slIm1.style.opacity = 0;
        slIm2.style.opacity = 0;
        slIm3.style.opacity = 0;
        slIm4.style.opacity = 1;
        slIm5.style.opacity = 0;
        slIm6.style.opacity = 0;
    }
    stBt5.onclick = function (e) {
        slIm1.style.opacity = 0;
        slIm2.style.opacity = 0;
        slIm3.style.opacity = 0;
        slIm4.style.opacity = 0;
        slIm5.style.opacity = 1;
        slIm6.style.opacity = 0;
    }
    stBt6.onclick = function (e) {
        slIm1.style.opacity = 0;
        slIm2.style.opacity = 0;
        slIm3.style.opacity = 0;
        slIm4.style.opacity = 0;
        slIm5.style.opacity = 0;
        slIm6.style.opacity = 1;
    }
}
// popSlidCart();
//----------конец слайда-------------------
//--------------подключение попап формы---------------
function popForm() {
    let frmStrBtn = document.querySelector('.main__header-btn');
    let popForm = document.querySelector('.form__popap');
    let stopBtnFrm = document.querySelector('.p-b1');
    let BtnFrm = document.querySelector('.popap__btn');

    frmStrBtn.onclick = function () {
        popForm.style.opacity = 1;
    }
     stopBtnFrm.onclick = function () {
        popForm.style.opacity = 0;
    }
    BtnFrm.onclick = function (e) {
        e.preventDefault();
         alert('Форма не подключена ЭТО ОБРАЗЕЦ! ');
    }
}
// popForm();
//-------конец форм------------------------

//--------------подключение груп слайдер---------------
