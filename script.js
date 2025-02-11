// Play background music when the music button is clicked
document.getElementById('musicButton').addEventListener('click', function () {
  const music = document.getElementById('backgroundMusic');
  music.play();
  this.style.display = 'none'; // Hide the button after clicking
});

// Handle button clicks
document.getElementById('yesButton').addEventListener('click', function () {
  document.getElementById('response').innerText = "Aww, iako znao sam da ćeš reći da😎! 💖";
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.style.display = 'flex'; // Show the images
  imageContainer.classList.remove('hidden'); // Remove hidden class
});

document.getElementById('noButton').addEventListener('click', function () {
  document.getElementById('response').innerText = "Ok, ne moraš! 😢";
});
