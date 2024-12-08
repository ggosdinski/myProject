const form = document.getElementById('reservation-form');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Mostrar mensaje de confirmación
    confirmation.style.display = 'block';
    form.reset(); // Restablecer el formulario
});




// JavaScript to handle form submission
document.addEventListener('DOMContentLoaded', function () {
    const reservationForm = document.getElementById('reservationForm');
    const successMessage = document.getElementById('successMessage');

    reservationForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Show success message
        successMessage.style.display = 'block';

        // Optionally, reset the form fields
        reservationForm.reset();
    });
});
