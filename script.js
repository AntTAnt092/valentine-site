// Handle "Yes" button click
document.getElementById('yesButton').addEventListener('click', function () {
  // Display response message
  document.getElementById('response').innerText = "Aww, iako znao sam da ćeš reći da😎! 💖";

  // Show the images
  const imageContainer = document.getElementById('imageContainer');
  imageContainer.style.display = 'flex'; // Show the images
  imageContainer.classList.remove('hidden'); // Remove hidden class

  // Play the background music
  const music = document.getElementById('backgroundMusic');
  music.play();

  // Remove the music button
  const musicButton = document.getElementById('musicButton');
  musicButton.style.display = 'none'; // Hide the music button
});

// Handle "No" button click
document.getElementById('noButton').addEventListener('click', function () {
  document.getElementById('response').innerText = "Ok, ne moraš! 😢";
});