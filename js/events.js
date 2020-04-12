$(document).ready(function () {


    let $btns = $('.event-area .button-group button');


    $btns.click(function (e) {

        $('.event-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.event-area .grid').isotope({
            filter: selector
        });

        return false;
    })

     $('.event-area .button-group #btn2').trigger('click');

     $('.event-area .grid .test-popup-link').magnificPopup({
         type: 'image',
         gallery: { enabled: true }
     });




   
});