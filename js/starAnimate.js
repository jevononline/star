$(document).ready(function () {
    init();
    // loading()
    // window.onload = function(){
    //   $('.loading').fadeOut('100',function(){
    //        animate()
    //   })
    // }
    setTimeout(function () {
        $('.loading').fadeOut('100', function () {
            // animate()
        })
    }, 2000);
});
function loading() {
    $('body').append('<div class="openWindow"></div><div class="star-box"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M0,0v100h100V0H0z M95.9,52.6l-0.1,0.1c-24.5,0.1-44.4,19.9-44.6,44.4H47C46.7,72.7,27.1,53,2.7,52.8l-0.1-0.1v-4.4 C27,48.1,46.8,28.3,47,3.8h4.2c0.2,24.5,20.1,44.4,44.7,44.4V52.6z"/></svg></div>')
}

function animate() {
    $('.openWindow').animate({
        width: '6000px',
        height: '6000px',
        marginLeft: $(window).innerWidth() / 2 - 3000 + 'px'
    }, 1000)
    $('svg').animate({
        width: '6000px',
        height: '6000px',
        marginLeft: $(window).innerWidth() / 2 - 3000 + 'px'
    }, 1000)
    setTimeout(function () {
        $('.openWindow,.star-box').remove()
    }, 1000)
}