// eslint-disable-next-line no-undef
$(document).ready(function () {
  if ($(this).width() <= 891) {
    $('.catalog .section-items').each(function () {
      $(this).children('.catalog-item__mobile').wrapAll("<div class='catalog-item__mobile-wrap'></div>")
    })
  }
  if ($(this).width() >= 891) {
    $('.catalog-item__mobile-wrap').replaceWith(function () { return this.innerHTML })
  }

  $('.menu-catalog__btn').on('click', function () {
    $('.menu-catalog').addClass('active')
  })
  $('.close-btn').on('click', function () {
    $('.menu-catalog').removeClass('active')
  })

  // Select
  const selectCurrent = document.querySelectorAll('.select__header')
  const selectItem = document.querySelectorAll('.select__item')
  selectCurrent.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.currentTarget.parentElement.classList.toggle('is-open')
    })
  })
  selectItem.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.currentTarget.closest('.select').querySelector('.select__current').innerHTML = e.currentTarget.innerHTML
      e.currentTarget.closest('.select').classList.remove('is-open')
    })
  })

  // Download file
  $('.file-upload input[type=file]').change(function () {
    const fileName = $(this).val().replace(/.*\\/, '')
    $(this).closest('.file-upload').find('.file-upload__text').html(fileName)
  })

  // Tabs
  $('.tabs__item').on('click', function () {
    var $this = $(this)
    var item = $this.closest('.tabs__item')
    var container = $this.closest('.tabs')
    var content = container.find('.tabs__content-item')
    var ndx = item.index()

    item.addClass('active')
      .siblings()
      .removeClass('active')

    content.eq(ndx)
      .addClass('active')
      .siblings()
      .removeClass('active')
  })

  // Product slider
  $('.one-product__slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    centerMode: true,
    asNavFor: '.one-product__slider-nav'
  })
  $('.one-product__slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.one-product__slider-big',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  })

  // Popup
  $('.popup').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  })
})
