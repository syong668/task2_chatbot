AOS.init();

const swiper = new Swiper('.swiper', {
    /*  預設要顯示幾個卡片 */
    slidesPerView: 3,
    /* 斷點設定 */
    breakpoints: {
      /* 螢幕寬度大於等於 992px 時切換為 3 欄 */
        992: {
            slidesPerView: 3
        },
        /* 螢幕寬度大於等於 768px 時切換為 2 欄 */
        768: {
            slidesPerView: 2
        },
        /* 更小時都顯示 1 欄 */
        0: {
            slidesPerView: 1
        }
    },
    /* 卡片元素的間隔 */
    spaceBetween: 16,
    loop: true,

    /* 卡片元素的間隔 */
    spaceBetween: 16,
    pagination: {
      /* 我想將分頁圓點綁在哪個 class */
        el: ".swiper-pagination",
      /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
        clickable: true
    },
    autoplay: true

});

// top
$("#toTop").on("click",(e)=>{
    e.preventDefault();
    $("html,body").animate({scrollTop: 0}, 700 );
})

