function accordionHandler(event) {
  if (event.target.classList.contains('icon_plus')
    || event.target.classList.contains('icon_minus')) {

    const curItem = event.target.closest('.accordion-item')
    const items = document.querySelectorAll('.accordion-item')
    items.forEach((el) => {
      el.classList.remove('accordion-item_open')
    })
    curItem.classList.add('accordion-item_open')

  }


}

const accordion = document.querySelector('.accordion')
accordion.addEventListener('click', () => accordionHandler(event))
