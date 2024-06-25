let soundEnabled = true;
let customSound = null;
let volume = 1.0;

document.addEventListener('keydown', function(event) {
    const keyPressDiv = document.getElementById('key-press');
    const keyElement = document.querySelector(`.key[data-key="${event.key.toUpperCase()}"]`);

    // Show which key is pressed
    keyPressDiv.textContent = `Key Pressed: ${event.key}`;
    keyPressDiv.classList.add('pressed');
    
    if (keyElement) {
        keyElement.classList.add('pressed');
    }

    setTimeout(() => {
        keyPressDiv.classList.remove('pressed');
        if (keyElement) {
            keyElement.classList.remove('pressed');
        }
    }, 200);
    
    if (!soundEnabled) return;
    
    // List of online sound URLs
    const sounds = [
        'https://www.fesliyanstudios.com/play-mp3/387', // Funny Sound 1
        'https://www.fesliyanstudios.com/play-mp3/388', // Funny Sound 2
        'https://www.fesliyanstudios.com/play-mp3/389', // Funny Sound 3
        'https://www.fesliyanstudios.com/play-mp3/390', // Funny Sound 4
        'https://www.fesliyanstudios.com/play-mp3/391'  // Funny Sound 5
    ];

    let audio;
    if (customSound) {
        audio = new Audio(URL.createObjectURL(customSound));
    } else {
        // Generate a random number between 0 and length of sounds array - 1
        const randomIndex = Math.floor(Math.random() * sounds.length);
        // Create an audio element with the random sound URL
        audio = new Audio(sounds[randomIndex]);
    }
    
    // Set volume
    audio.volume = volume;
    
    // Play the sound
    audio.play();
});

document.getElementById('toggle-sound').addEventListener('click', function() {
    soundEnabled = !soundEnabled;
    this.textContent = soundEnabled ? 'Disable Sound' : 'Enable Sound';
});

document.getElementById('volume-slider').addEventListener('input', function() {
    volume = this.value / 100;
});

document.getElementById('upload-sound').addEventListener('change', function(event) {
    customSound = event.target.files[0];
});
