let soundEnabled = true;

document.addEventListener('keydown', function(event) {
    const keyPressDiv = document.getElementById('key-press');
    
    
    keyPressDiv.textContent = `Key Pressed: ${event.key}`;
    keyPressDiv.classList.add('pressed');
    
    setTimeout(() => {
        keyPressDiv.classList.remove('pressed');
    }, 200);
    
    if (!soundEnabled) return;
    
    
    const sounds = [
        'https://www.fesliyanstudios.com/play-mp3/387', 
        'https://www.fesliyanstudios.com/play-mp3/388', 
        'https://www.fesliyanstudios.com/play-mp3/389', 
        'https://www.fesliyanstudios.com/play-mp3/390', 
        'https://www.fesliyanstudios.com/play-mp3/391'  
    ];

    const randomIndex = Math.floor(Math.random() * sounds.length);
    

    const audio = new Audio(sounds[randomIndex]);
    
    
    audio.play();
});

document.getElementById('toggle-sound').addEventListener('click', function() {
    soundEnabled = !soundEnabled;
    this.textContent = soundEnabled ? 'Disable Sound' : 'Enable Sound';
});
