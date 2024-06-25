<<<<<<< HEAD
=======

>>>>>>> bd00b6d4b7be0791a8859a32899bf36dc546c734
let soundEnabled = JSON.parse(localStorage.getItem('soundEnabled')) ?? true;
let volume = localStorage.getItem('volume') ? parseFloat(localStorage.getItem('volume')) : 1.0;

document.addEventListener('keydown', function(event) {
    const keyPressDiv = document.getElementById('key-press');
    

    keyPressDiv.textContent = `Key Pressed: ${event.key}`;
    keyPressDiv.classList.add('pressed');
<<<<<<< HEAD
    
=======
   
    if (keyElement) {
        keyElement.classList.add('pressed');
    }

>>>>>>> bd00b6d4b7be0791a8859a32899bf36dc546c734
    setTimeout(() => {
        keyPressDiv.classList.remove('pressed');
    }, 200);
   
    if (!soundEnabled) return;
<<<<<<< HEAD
    
    const sounds = [
        'https://www.myinstants.com/media/sounds/trololo.mp3', 
        'https://www.myinstants.com/media/sounds/fart-with-reverb.mp3', 
        'https://www.myinstants.com/media/sounds/funny-bounce.mp3' 
    ];
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const audio = new Audio(sounds[randomIndex]);
    
=======
   
    const sounds = [
        'https://www.myinstants.com/media/sounds/trololo.mp3', // Funny Sound 1
        'https://www.myinstants.com/media/sounds/fart-with-reverb.mp3', // Funny Sound 2
        'https://www.myinstants.com/media/sounds/funny-bounce.mp3'  // Funny Sound 3
    ];
    const randomIndex = Math.floor(Math.random() * sounds.length);
    const audio = new Audio(sounds[randomIndex]);
   
>>>>>>> bd00b6d4b7be0791a8859a32899bf36dc546c734
    audio.volume = volume;
    audio.play();
});

document.getElementById('toggle-sound').addEventListener('click', function() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('soundEnabled', soundEnabled);
    this.textContent = soundEnabled ? 'Disable Sound' : 'Enable Sound';
});

document.getElementById('volume-slider').addEventListener('input', function() {
    volume = this.value / 100;
    localStorage.setItem('volume', volume);
});

// Initialize settings
document.getElementById('toggle-sound').textContent = soundEnabled ? 'Disable Sound' : 'Enable Sound';
document.getElementById('volume-slider').value = volume * 100;
