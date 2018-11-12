// $(function traversing() {

//     const $redBorderImage = $('.selected').removeClass('selected');

//     const $secondGallery = $('div:eq(1)');
//     $secondGallery.children().eq(1).addClass('selected');
// });


// 2. nacin

(function moveClass() {

    let $redBorderImage = $('.selected');

    $redBorderImage
        .removeClass('selected')
        .parent()
        .next()
        .children()
        .eq(1)
        .addClass('selected');

})();