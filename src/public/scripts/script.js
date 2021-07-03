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

    // loader
    const loader = selectOne('.loader')
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('d-none')
        }, 500)
    })
})