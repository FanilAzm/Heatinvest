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

  // eslint-disable-next-line no-undef
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
