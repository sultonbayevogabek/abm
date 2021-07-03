'use strict'

document.addEventListener('DOMContentLoaded', e => {
   const modal = document.querySelector('.modal'),
      modalContent = document.querySelector('.modal__content'),
      form = document.querySelector('.contact-us__form'),
      nameInput = document.querySelector('#customer_name'),
      phoneInput = document.querySelector('#customer_phone')

   form.addEventListener('submit', async e => {
      e.preventDefault()

      let response = await fetch('/', {
         headers: {
            'Content-Type': 'application/json'
         },
         method: 'POST',
         body: JSON.stringify({
            name: nameInput.value.trim(),
            phone: phoneInput.value
         })
      })
      response = await response.json()
      console.log(response)

      if (response.ok) {
         const selectedOptionIndex = +localStorage.getItem('selectedOptionIndex')
         modalContent.classList.remove('modal__content--warning')
         modalContent.textContent = data[selectedOptionIndex].form.success
         modal.classList.remove('d-none')
         e.target.reset()

         setTimeout(() => {
            modal.classList.add('d-none')
         }, 5000)
      }

      if (!response.ok) {
         const selectedOptionIndex = +localStorage.getItem('selectedOptionIndex')
         modalContent.classList.add('modal__content--warning')
         modalContent.textContent = data[selectedOptionIndex].form.failed
         modal.classList.remove('d-none')

         setTimeout(() => {
            modal.classList.add('d-none')
         }, 5000)
      }
   })
})