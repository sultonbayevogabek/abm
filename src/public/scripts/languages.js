'use strict'

document.addEventListener('DOMContentLoaded', () => {
   const selectOne = selector => document.querySelector(selector),
      selectAll = selector => document.querySelectorAll(selector)

   function addClass(element, className) {
      element.classList.add(className)
   }

   function removeClass(element, className) {
      element.classList.remove(className)
   }

   new Splide( '.splide', {
      type: 'loop',
      perPage: 4,
      perMove: 1,
      pagination: false,
      pauseOnHover: true,
      autoplay: true,
      interval: 2000,
      breakpoints: {
         800: {
            perPage: 3,
         },
         540: {
            perPage: 2,
         },
      }
   }).mount();

   function feedbackListRender() {
      setTimeout(() => {
         new Splide( '.feedback .splide', {
            rewind: true,
            type: 'fade',
            perPage: 1,
            perMove: 1,
            pagination: false,
            pauseOnHover: true,
            autoplay: true,
            interval: 2000,
         }).mount();
      }, 200)
   }

   feedbackListRender()

   const selectElement = selectOne('.select'),
      selectSelected = selectOne('.select__selected'),
      selectList = selectOne('.select__list'),
      selectItems = selectAll('.select__item'),
      rowLanguageItems = selectAll('.row-language__item')

   const siteNavLinks = selectAll('.site-nav__link--only'),
      introHeading = selectOne('.site-intro__left h1'),
      introText = selectOne('.site-intro__left p'),
      introLink = selectOne('.site-intro__left a'),
      aboutUsHeading = selectOne('.about-us h2'),
      aboutUsText = selectOne('.about-us p'),
      servicesHeading = selectOne('.services h2'),
      servicesCardsWrapper = selectOne('.services-cards'),
      whyWeHeading = selectOne('.why-we h2'),
      whyWeCardsWrapper = selectOne('.why-we__cards'),
      trustedCompaniesHeading = selectOne('.trusted-companies h2'),
      trustedCompaniesList = selectOne('.splide__list'),
      feedbackHeading = selectOne('.feedback h2'),
      feedbackList = selectOne('.feedback ul'),
      faqHeading = selectOne('.faq h2'),
      faqList = selectOne('.faq__ul'),
      contactUsHeading = selectOne('.contact-us h3'),
      contactUsNameInput = selectOne('input[name="name"]'),
      contactUsPhoneInput = selectOne('input[name="phone"]'),
      contactUsSubmit = selectOne('.contact-us__submit')

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

   languageRender(selectedOptionIndex)

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
      window.location.reload()
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
         window.location.reload()
      })
   })

   function languageRender(selectedLanguageIndex) {
      const {menu, intro, about, services, whyWe, trustedCompanies, feedback, faq, contactUs} = data[selectedLanguageIndex]

      for (let i = 0; i < 5; i++) {
         siteNavLinks[i].textContent = menu[i]
      }

      introHeading.textContent = intro.h1
      introText.textContent = intro.p
      introLink.textContent = intro.a

      aboutUsHeading.textContent = about.h2
      aboutUsText.textContent = about.p

      servicesHeading.textContent = services.h2
      servicesCardsWrapper.innerHTML = `
         <div class="services-cards__left" data-aos="zoom-in" data-aos-delay="100" data-aos-once="true">
             <div class="services-card">
                <img src="img/services/1.svg" alt="">
                <h3>${services.cards[0].h3}</h3>
                <p>${services.cards[0].p}</p>
                <a href="#contact">${services.cards[0].a}</a>
             </div>
          </div>
         <div class="services-cards__right" data-aos="zoom-in" data-aos-delay="100" data-aos-once="true">
             <div class="services-card">
                <img src="img/services/2.svg" alt="">
                <h3>${services.cards[1].h3}</h3>
             </div>
             <div class="services-card">
                <img src="img/services/3.svg" alt="">
                <h3>${services.cards[2].h3}</h3>
             </div>
             <div class="services-card">
                <img src="img/services/4.svg" alt="">
                <h3>${services.cards[3].h3}</h3>
             </div>
             <div class="services-card">
                <img src="img/services/5.svg" alt="">
                <h3>${services.cards[4].h3}</h3>
             </div>
             <div class="services-card">
                <img src="img/services/6.svg" alt="">
                <h3>${services.cards[5].h3}</h3>
             </div>
          </div>
      `

      whyWeHeading.textContent = whyWe.h2
      whyWeCardsWrapper.innerHTML = ''
      whyWe.list.forEach(item => {
         whyWeCardsWrapper.innerHTML += `
         <div class="why-we__card">
            <img src="img/why-we/star.svg" alt="star icon">
            <h3>${item.h3}</h3>
            <p>${item.p}</p>
         </div>
         `
      })

      trustedCompaniesHeading.textContent = trustedCompanies.h2

      feedbackHeading.textContent = feedback.h2
      feedbackList.innerHTML = ''
      feedback.list.forEach(item => {
         feedbackList.innerHTML += `
            <li class="splide__slide">
                <h3>
                   <strong>${item.author}</strong>
                   <span>${item.companyName}</span>
                </h3>
                <p>${item.text}</p>
            </li>
         `
      })

      faqHeading.textContent = faq.h2
      faqList.innerHTML = ''
      faq.list.forEach(item => {
         faqList.innerHTML += `
            <li class="faq__li" data-aos="fade-right" data-aos-delay="100" data-aos-once="true">
             <div class="faq__li__header">
                <h3 class="faq__question">${item.question}</h3>
                <div class="faq__icon">
                   <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.66878 0.849854V8.08944M7.66878 15.329V8.08944M7.66878 8.08944H14.9084H0.429199"
                         stroke="" stroke-width="2" />
                   </svg>
                </div>
             </div>
             <p class="faq__answer">
                ${item.answer}
             </p>
          </li>
         `
      })

      contactUsHeading.textContent = contactUs.h3
      contactUsNameInput.setAttribute('placeholder', contactUs.name)
      contactUsPhoneInput.setAttribute('placeholder', contactUs.phone)
      contactUsSubmit.textContent = contactUs.send
   }
})