document.addEventListener('DOMContentLoaded', () => {
    const sounds = [
        'sounds/EZ (easy).mp3',
        'sounds/Fading Sound Effect (Stick Bug Sound Effect).mp3',
        'sounds/FAIL - WHA WHA VERSION.mp3',
        'sounds/FAIL #2.mp3',
        'sounds/FAIL.mp3',
        'sounds/FALLING.mp3',
        'sounds/FART #2.mp3',
        'sounds/Fart Doo Doo.mp3',
        'sounds/Fart Quick Reverb.mp3',
        'sounds/Fart Wet.mp3',
        'sounds/FART with extra reverb.mp3',
        'sounds/FART.mp3',
        'sounds/FAST TIP TOES.mp3',
        'sounds/FATALITY.mp3',
        'sounds/FBI Open Up Full.mp3',
        'sounds/FBI OPEN UP.mp3',
        'sounds/Fight Back.mp3',
        'sounds/FINISH HIM.mp3',
        'sounds/Flash Bang Sound Effect.mp3',
        'sounds/Flightreacts crying.mp3',
        'sounds/FlightReacts Dolphin Laugh.mp3',
        'sounds/flightreacts random noises #1.mp3',
        'sounds/flightreacts random noises #2.mp3',
        'sounds/flightreacts random noises #3.mp3',
        'sounds/flightreacts random noises #4.mp3',
        'sounds/flightreacts scream #2.mp3'

    ];

    const imageContainer = document.getElementById('image-container');

    document.addEventListener('keydown', () => {
        let randomSoundIndex = Math.floor(Math.random() * sounds.length);
        playSound(sounds[randomSoundIndex]);
        getRandomDinoImage();
    });

    function playSound(soundPath) {
        console.log('Playing sound:', soundPath); 
        let audio = new Audio(soundPath);
        audio.play().catch(error => {
            console.error('Error playing sound:', error);
        });
    }

    async function getRandomDinoImage() {
        try {
            const response = await fetch('https://api.github.com/repos/hackclub/dinosaurs/contents');
            const data = await response.json();
            const images = data
                .filter(item => item.name.endsWith('.png'))
                .map(item => item.download_url);

            if (images.length > 0) {
                const randomDinoImage = images[Math.floor(Math.random() * images.length)];
                imageContainer.innerHTML = `<img src="${randomDinoImage}" alt="Dinosaur Image">`;
            }
        } catch (error) {
            console.error('Error fetching dinosaur images:', error);
        }
    }

    getRandomDinoImage(); 

    
    const starsContainer = document.createElement('div');
    starsContainer.id = 'starsContainer';
    document.body.appendChild(starsContainer);

    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        starsContainer.appendChild(star);
    }
});
