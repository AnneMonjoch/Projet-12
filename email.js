// emailjs.js
// Chargez la bibliothèque EmailJS
(function () {
    emailjs.init('y6X0WIeOauq1Y70io');
  })();
  
  const contactForm = document.getElementById('contactForm');
  const confirmationModal = document.getElementById('confirmationModal');
  const closeButton = confirmationModal.querySelector('.close');
  
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
  
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
  
    // Collectez les données du formulaire
    const formData = {
      from_name: nameInput.value,
      from_email: emailInput.value,
      phone: phoneInput.value,
      subject: subjectInput.value,
      message: messageInput.value,
    };
  
    // Envoyez l'e-mail en utilisant EmailJS
    emailjs.send('service_uiann9q', 'contact_form', formData).then(
      function (response) {
        console.log('E-mail envoyé avec succès:', response);
        confirmationModal.style.display = 'block';
      },
      function (error) {
        console.log('Erreur lors de l\'envoi de l\'e-mail:', error);
      }
    );
  
    // Associez un gestionnaire d'événement pour fermer la modale
    closeButton.addEventListener('click', () => {
      confirmationModal.style.display = 'none';
    });
  });
  
  
