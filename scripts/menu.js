document.addEventListener('DOMContentLoaded', () => {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    const removeButtons = document.querySelectorAll('.remove-favorite-btn');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    const overlay = document.getElementById('overlay');

    // Obtener los favoritos guardados en localStorage
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favoriteButtons.forEach((button, index) => {
        const dishName = button.parentElement.querySelector('h3').textContent;
        const removeButton = removeButtons[index];

        // Verificar si el plato está en los favoritos y actualizar la UI
        if (favorites.includes(dishName)) {
            button.classList.add('active');
            button.querySelector('.favorite-icon').textContent = '❤️'; // Corazón rojo
            removeButton.style.display = 'inline-flex'; // Mostrar el botón de eliminar
        } else {
            removeButton.style.display = 'none'; // Esconder el botón de eliminar si no está en favoritos
        }

        // Agregar a favoritos
        button.addEventListener('click', function () {
            if (!favorites.includes(dishName)) {
                favorites.push(dishName);
                localStorage.setItem('favorites', JSON.stringify(favorites));

                // Actualizar la UI
                button.classList.add('active');
                button.querySelector('.favorite-icon').textContent = '❤️'; // Corazón rojo
                removeButton.style.display = 'inline-flex'; // Mostrar el botón de eliminar

                // Mostrar el mensaje de notificación
                showToast(`${dishName} has been added to your favorites.`);
            } else {
                showToast(`${dishName} is already in your favorites.`);
            }
        });

        // Eliminar de favoritos
        removeButton.addEventListener('click', function () {
            favorites = favorites.filter(fav => fav !== dishName);
            localStorage.setItem('favorites', JSON.stringify(favorites));

            // Actualizar la UI
            button.classList.remove('active');
            button.querySelector('.favorite-icon').textContent = '🤍'; // Corazón gris
            removeButton.style.display = 'none'; // Ocultar el botón de eliminar

            // Mostrar el mensaje de notificación
            showToast(`${dishName} has been removed from your favorites.`);
        });
    });

    // Función para mostrar el toast
    function showToast(message) {
        toastMessage.textContent = message;
        toast.classList.add('show');
        overlay.classList.add('show');  // Mostrar el overlay difuso

        // Actualizar la posición del toast en función del desplazamiento de la página
        const scrollPosition = window.scrollY;
        toast.style.top = `${20 + scrollPosition}px`;

        // Ocultar el toast después de 3 segundos
        setTimeout(() => {
            toast.classList.remove('show');
            overlay.classList.remove('show');  // Ocultar el overlay
        }, 3000);
    }
});
