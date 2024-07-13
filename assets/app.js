const heroSwiper = new Swiper ('.main-swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    simulateTouch: true,
    slidesPerView: 'auto',
});

const productThumsSwiper = new Swiper(".product-info__thumbs-swiper", {
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
  direction: 'vertical',

  navigation: {
    prevEl: ".product-prev-button",
    nextEl: ".product-next-button",
  },
});
const productMainSwiper = new Swiper(".product-image__swiper", {
  thumbs: {
    swiper: productThumsSwiper,
  },
});


const tabItems = Array.from(document.querySelectorAll('.tab'))
const contentItems = Array.from(document.querySelectorAll('.content-item'))

const clearActiveClass = (element, className = 'is-active') => {
  element.find(item => item.classList.remove(`${ className }`))
}

const setActiveClass = (element, index, className = 'is-active') => {
  element[index].classList.add(`${ className }`)
}

const checkoutTabs = (item, index) => {
  item.addEventListener('click', () => {
    
    if (item.classList.contains('is-active')) return
    console.log(item)
  
    clearActiveClass(tabItems)
    clearActiveClass(contentItems)
    
    setActiveClass(tabItems, index)
    setActiveClass(contentItems, index)
  })
}

tabItems.forEach(checkoutTabs)


const clickToHide = document.querySelector('#click-to-hide');
    if (clickToHide){
      clickToHide.addEventListener("click", hideVisibleElem);
    }
    function hideVisibleElem() {
    const wpcraftBox = document.querySelector('.product-values__hidden');
    wpcraftBox.classList.toggle("hide-element");

    if (wpcraftBox.classList.contains("hide-element")){
    clickToHide.value = 'Все характеристики';
    } else {
    clickToHide.value = 'Скрыть характеристики';
    }
}


const clickToHide2 = document.querySelector('.main-catalog__title');
    if(clickToHide2){
      clickToHide2.addEventListener("click", hideVisibleElem2);
    } 
 
    function hideVisibleElem2() {
    const wpcraftBox2 = document.querySelector('.main-catalog__list');
    wpcraftBox2.classList.toggle("list-hide");
}

  if(innerWidth <= 992){
    document.querySelector('.mobile_burger').addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector('#menu').style.display='block';
      document.querySelector('body').classList.add('open');
    })
    document.querySelector('.mobile_close_menu').addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector('#menu').style.display='none';
      document.querySelector('body').classList.remove('open');
    })
    document.querySelectorAll('.mobile_menu_link').forEach(function(link){
      link.addEventListener('click', function(){
        document.querySelector('#menu').style.display='none';
        document.querySelector('body').classList.remove('open');
      });
    });
  }
