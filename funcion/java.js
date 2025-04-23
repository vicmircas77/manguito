const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

// Mover el botón "No" al pasar el mouse
noButton.addEventListener('mouseover', () => {
  const container = document.querySelector('.container'); // Contenedor de referencia
  const containerRect = container.getBoundingClientRect(); // Obtén el tamaño del contenedor

  // Calcula nuevas posiciones dentro de los límites del contenedor
  const x = Math.random() * (containerRect.width - noButton.offsetWidth);
  const y = Math.random() * (containerRect.height - noButton.offsetHeight);

  // Asigna las nuevas posiciones al botón
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

// Mostrar el mensaje en un cuadro emergente al presionar el botón "Sí"
yesButton.addEventListener('click', () => {
  alert("¡Sabía que dirías que sí, te amo ❤️!");
});

