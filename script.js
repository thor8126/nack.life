document.addEventListener('DOMContentLoaded', function() {
    var elem = document.querySelector('.style-5');
    var flkty = new Flickity(elem, {
      cellAlign: 'center',
      contain: true,
      prevNextButtons: true,
      pageDots: false,
      wrapAround: true,
      autoPlay: true,
      pauseAutoPlayOnHover: true
    });
  });
  