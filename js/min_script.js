const sliderButton2=document.querySelector(`.js-slider-button--2`),sliderButton1=document.querySelector(`.js-slider-button--1`),sliderButton3=document.querySelector(`.js-slider-button--3`),promoSlider2=document.querySelector(`.promo-slider-2`),promoSlider1=document.querySelector(`.promo-slider-1`),promoSlider3=document.querySelector(`.promo-slider-3`);sliderButton2.addEventListener(`click`,function(a){a.preventDefault(),document.querySelector(`.slider-button--active`).classList.remove(`slider-button--active`),document.querySelector(`.promo-slider--active`).classList.remove(`promo-slider--active`),sliderButton2.classList.add(`slider-button--active`),promoSlider2.classList.add(`promo-slider--active`)}),sliderButton1.addEventListener(`click`,function(a){a.preventDefault(),document.querySelector(`.slider-button--active`).classList.remove(`slider-button--active`),document.querySelector(`.promo-slider--active`).classList.remove(`promo-slider--active`),sliderButton1.classList.add(`slider-button--active`),promoSlider1.classList.add(`promo-slider--active`)}),sliderButton3.addEventListener(`click`,function(a){a.preventDefault(),document.querySelector(`.slider-button--active`).classList.remove(`slider-button--active`),document.querySelector(`.promo-slider--active`).classList.remove(`promo-slider--active`),sliderButton3.classList.add(`slider-button--active`),promoSlider3.classList.add(`promo-slider--active`)});const buttonWrite=document.querySelector(`.button--write-to-us`),formSection=document.querySelector(`.form-section`),buttonClose=formSection.querySelector(`.button-modal-close`),inputName=formSection.querySelector(`.input-text--name`),inputEmail=formSection.querySelector(`.input-text--email`),formWrite=formSection.querySelector(`.write-to-us-form`);let isStorageSupport=!0,storage="";try{storage=localStorage.getItem(`name`)}catch(a){isStorageSupport=!1}buttonWrite.addEventListener(`click`,function(a){a.preventDefault(),formSection.classList.add(`form-section--show`),storage?(inputName.value=storage,inputEmail.focus()):inputName.focus()}),buttonClose.addEventListener(`click`,function(a){a.preventDefault(),formSection.classList.remove(`form-section--show`),formSection.classList.remove("form-section--error")}),formWrite.addEventListener(`submit`,function(a){console.log(`Попытка`),inputName.value&&inputEmail.value?isStorageSupport&&localStorage.setItem(`name`,inputName.value):(a.preventDefault(),formSection.classList.remove("form-section--error"),formSection.offsetWidth=formSection.offsetWidth,formSection.classList.add("form-section--error"))}),window.addEventListener("keydown",function(a){27===a.keyCode&&formSection.classList.contains(`form-section--show`)&&(a.preventDefault(),formSection.classList.remove(`form-section--show`),formSection.classList.remove("form-section--error"))});
