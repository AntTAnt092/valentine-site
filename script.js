// Handle button clicks
document.getElementById('yesButton').addEventListener('click', function () {
  const music = document.getElementById('backgroundMusic');
  music.play(); // Start playing music
  document.getElementById('response').innerText = "Aww, iako znao sam da ćeš reći da😎! 💖";
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.style.display = 'flex'; // Show the images
  imageContainer.classList.remove('hidden'); // Remove hidden class
});

document.getElementById('noButton').addEventListener('click', function () {
  const music = document.getElementById('backgroundMusic');
  music.pause(); // Stop playing music
  music.currentTime = 0; // Reset music to the beginning
  document.getElementById('response').innerText = "Ok, ne moraš! 😢";
});

// Toggle Menu Dropdown
document.getElementById('menuButton').addEventListener('click', function () {
  const dropdown = document.getElementById('menuDropdown');
  dropdown.classList.toggle('show');
});

// Close dropdown if clicked outside
window.addEventListener('click', function (event) {
  const dropdown = document.getElementById('menuDropdown');
  const menuButton = document.getElementById('menuButton');
  if (!menuButton.contains(event.target)) {
    dropdown.classList.remove('show');
  }
});

// Toggle Menu Dropdown
document.getElementById('menuButton').addEventListener('click', function () {
  const dropdown = document.getElementById('menuDropdown');
  dropdown.classList.toggle('show');
});

// Close dropdown if clicked outside
window.addEventListener('click', function (event) {
  const dropdown = document.getElementById('menuDropdown');
  const menuButton = document.getElementById('menuButton');
  if (!menuButton.contains(event.target)) {
    dropdown.classList.remove('show');
  }
});