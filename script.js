// Handle button clicks
document.getElementById('yesButton').addEventListener('click', function () {
  const music = document.getElementById('backgroundMusic');
  
  // Ensure music starts only after user interaction
  if (music.paused) {
    music.play()
      .then(() => {
        console.log("Music started playing.");
      })
      .catch((error) => {
        console.error("Failed to play music:", error);
        alert("Please allow audio playback in your browser settings.");
      });
  }

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