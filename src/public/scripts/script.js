'use strict'

document.addEventListener('DOMContentLoaded', () => {
    // declare selector functions
    const selectOne = selector => document.querySelector(selector),
        selectAll = selector => document.querySelectorAll(selector)
    
    function addClass(element, className) {
        element.classList.add(className)
    }

    function removeClass(element, className) {
        element.classList.remove(className)
    }


    // faq accordion
    const accordionItems = selectAll('.faq__li')

    accordionItems.forEach(item => {
        item.addEventListener('click', e => {
            const target = e.currentTarget

            if (target.classList.contains('faq__li--active')) {
                return target.classList.remove('faq__li--active')
            }

            accordionItems.forEach(item => item.classList.remove('faq__li--active'))

            target.classList.add('faq__li--active')
        })
    })

    // initialize aos library
    AOS.init();

    // site nav
    const siteNav = selectOne('.site-nav'),
        siteNavOpen = selectOne('.menu-icon'),
        siteNavClose = selectOne('.site-nav__close'),
        siteNavLinks = selectAll('.site-nav__link')

    siteNavOpen.addEventListener('click', e => {
        siteNav.classList.add('site-nav-show')
        document.body.style.overflow = 'hidden'
    })

    siteNavClose.addEventListener('click', e => {
        siteNav.classList.remove('site-nav-show')
        document.body.style.overflow = ''
    })

    siteNavLinks.forEach(item => {
        item.addEventListener('click', e => {
            siteNav.classList.remove('site-nav-show')
            document.body.style.overflow = ''
        })
    })

    // languages select
    const selectElement = selectOne('.select'),
        selectSelected = selectOne('.select__selected'),
        selectList = selectOne('.select__list'),
        selectItems = selectAll('.select__item'),
        rowLanguageItems = selectAll('.row-language__item')

    function showSelectList() {
        removeClass(selectList, 'd-none')
    }

    function hideSelectList() {
        addClass(selectList, 'd-none')
    }

    selectSelected.addEventListener('click', e => {
        if (selectList.classList.contains('d-none')) {
            showSelectList()
        } else {
            hideSelectList()
        }
    })

    let selectedOptionIndex

    if (localStorage.getItem('selectedOptionIndex')) {
        selectedOptionIndex = localStorage.getItem('selectedOptionIndex')
        selectItems.forEach(item => item.classList.remove('select__item--active'))
        addClass(selectItems[selectedOptionIndex], 'select__item--active')
    } else {
        selectedOptionIndex = 0
        selectItems.forEach(item => item.classList.remove('select__item--active'))
        addClass(selectItems[selectedOptionIndex], 'select__item--active')
    }

    selectSelected.textContent = selectItems[selectedOptionIndex].textContent

    selectList.addEventListener('click', e => {
        const target = e.target
        selectItems.forEach((item, index) => {
            removeClass(item, 'select__item--active')

            if (target === item) {
                selectedOptionIndex = index
                selectSelected.textContent = selectItems[selectedOptionIndex].textContent
                localStorage.setItem('selectedOptionIndex', selectedOptionIndex)
            }
        })

        addClass(target, 'select__item--active')
    })

    window.addEventListener('keydown', e => {
        if (e.code === 'Escape') {
            hideSelectList()
        }
    })

    window.addEventListener('click', e => {
        if (e.target !== selectSelected) {
            hideSelectList()
        }
    })

    rowLanguageItems[selectedOptionIndex].classList.add('row-language__item--active')

    rowLanguageItems.forEach((item, index) => {
        item.addEventListener('click', e => {
            selectedOptionIndex = index
            localStorage.setItem('selectedOptionIndex', selectedOptionIndex)
            rowLanguageItems.forEach(item => item.classList.remove('row-language__item--active'))
            rowLanguageItems[selectedOptionIndex].classList.add('row-language__item--active')
        })
    })

    // mask phone input
    let element = document.getElementById('customer_phone');
    let maskOptions = {
        mask: '+{998}(00)000-00-00'
    };
    let mask = IMask(element, maskOptions);

    // disappear alert danger or success
    const alertDanger = selectOne('.alert-danger'),
        alertSuccess = selectOne('.alert-success')
    if (alertDanger) {
        setTimeout(() => {
            alertDanger.remove()
        }, 10000)
    }

    if (alertSuccess) {
        setTimeout(() => {
            alertSuccess.remove()
        }, 10000)
    }
})