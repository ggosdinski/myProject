// Obtener el elemento donde se mostrará el estado del restaurante
const statusElement = document.getElementById('restaurant-status');

// Función para mostrar el estado actual
function checkRestaurantStatus() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours(); // Obtener la hora actual
    const currentDay = currentTime.getDay(); // Obtener el día de la semana (0 = domingo, 1 = lunes, etc.)

    // El restaurante está abierto de lunes a sábado de 12:00 PM a 10:00 PM
    // El domingo está cerrado
    if (currentDay === 0 || currentHour < 12 || currentHour > 22) {
        statusElement.innerHTML = "<strong>Sorry, we are closed now. Please visit us between 12:00 PM - 10:00 PM.</strong>";
    } else {
        statusElement.innerHTML = "<strong>We are open now! Come visit us.</strong>";
    }
}

// Llamamos a la función cuando cargue la página
document.addEventListener('DOMContentLoaded', checkRestaurantStatus);


document.getElementById('reservation-form').addEventListener('submit', function (e) {
    e.preventDefault();  // Evitar que el formulario se envíe por defecto

    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const comments = document.getElementById('comments').value;

    // Mostrar el mensaje de confirmación
    const confirmation = document.getElementById('confirmation');
    confirmation.style.display = 'block';

    // Esconder el formulario
    document.getElementById('reservation-form').style.display = 'none';

    // Guardar la reserva en localStorage (si es necesario)
    const reservation = { name, number, date, time, comments };
    localStorage.setItem('latestReservation', JSON.stringify(reservation));
});
