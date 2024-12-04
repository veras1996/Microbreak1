// Zufallsgenerator für jede Kategorie
const categories = {
  eyes: {
    text: [
      "Do consecutive sets of blinking. Prolonged exposure to the computer screen can cause dryness to your eyes.",
      "Focus on near and far objects. Look into the distance for a couple seconds, back to the left corner of your screen, back to the distance, right corner of the screen. Do this for 5-10 rounds.",
      "Roll your eyes very exaggeratingly clockwise and counterclockwise.",
	  "Look into the left upper corner of your room, then shift to the right upper corner, right lower corner, left lower corner. Do this for 5-10 rounds.",
	  "Rub your palms until you created some heat. Then press hand balls to eyes and sit in the dark for a while.",
	  "Imagine a giant figure eight in front of you. Trace the figure eight with your eyes, following its contours.",
	  "Hold a pen at arm’s length and focus on its tip. Then, gradually bring it closer to your nose while maintaining focus. Repeat this exercise several times to enhance your eye’s focusing ability.",
	  "Gently massage your eyelids and the surrounding areas using your fingertips. This helps relax the eye muscles and improve blood circulation.",
	  "Look out of a window and focus on a distant object. This exercise helps relax your eye muscles and reduce fatigue.",
	  "Alternate between focusing on a bright object and a dark object to improve your eye’s ability to adjust to different lighting conditions.",
	  "Without moving your head: shift your eyes to the left as far es possible - hold a couple seconds. Move them to the right - hold again. Repeat 5 times.",
	  "Without moving your head: go clockwise: look up (at 12 o'clock) for a couple seconds, go back to the middle, go to 1 o'clock - back to middle - 2 etc. until 11 o'clock ;)",
	  "Without moving your head: go counterclockwise: look up (at 12 o'clock) for a couple seconds, go back to the middle, go to 1 o'clock - back to middle - 2 etc. until 11 o'clock ;)",
	  "Put the pointer fingers of both hands in front of you. One near and up, the other far and down . Very quickly switch between looking at one and the other finger. Do this a couple of times. Then change position of fingers and do again."
    ],
  },
  body: {
    text: [
      "Walk a couple of steps.",
	  "Go up and down a stair.",
      "Jump up and down for a while",
      "Separate and straighten yourfingers until you feel a stretch. Hold 10 seconds. Next: Bend your fingers at theknuckles. Hold 10 seconds"
    ],
    image: [
      "Screenshot 2024-12-03 143848.png",
      "Screenshot 2024-12-03 143922.png",
      "Screenshot 2024-12-03 143946.png",
	  "Screenshot 2024-12-03 144043.png",
	  "Screenshot 2024-12-03 144113.png",
	  "Screenshot 2024-12-03 144134.png",
	  "Screenshot 2024-12-03 144156.png",
	  "Screenshot 2024-12-03 144225.png",
	  "Screenshot 2024-12-03 144242.png",
	  "Screenshot 2024-12-03 144400.png",
	  "Screenshot 2024-12-03 144529.png",
	  "Screenshot 2024-12-03 144715.png",
	  "Screenshot 2024-12-03 145106.png"
    ]
  },
  mind: {
    text: [
      "Open the windows - breath some fresh air",
      "Get yourself a tea or coffee",
      "Daydream about something you look forward to",
	  "Take a breathing exercise: Inhale for the count of 4, hold for 2, exhale to the count of 6. Repeat silently in your head for 1-2 minutes.",
	  "Close your eyes and focus on your breath for a couple of minutes",
	  "Look at the sky/the clouds for a while",
	  "Listen to your current favourite song",
	  "Go on youtube and look for 'fractals'. Choose a video and just relax for a bit. Looking at fractals helps to reduce stress",
	  "Think about the positive things that happened today.",
	  "Do a quick body scan. Focus on each body part one after the other and actively try to release the muscles",
	  "Do a very quick desk (or desktop) cleaning session.",
	  
    ],
  },
};

// Tab-Funktion
function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

// Kategorie anzeigen / verbergen
function toggleCategory(category) {
  const categoryElement = document.getElementById(category);
  const allCategories = document.querySelectorAll('.category');
  allCategories.forEach(cat => cat.classList.remove('active'));

  // Wenn diese Kategorie nicht bereits aktiv ist, zeigen wir sie
  if (!categoryElement.parentNode.classList.contains('active')) {
    categoryElement.parentNode.classList.add('active');
  }
}

// Zufall generieren
function generateRandom(category) {
  const categoryData = categories[category];
  const categoryContainer = document.getElementById(category); // Der Container der Kategorie

  if (category === 'body') {
    // Zufällig entscheiden, ob Text oder Bild angezeigt wird
    const showText = Math.random() < 0.5;

    if (showText) {
      // Zeige zufälligen Text
      const randomTextIndex = Math.floor(Math.random() * categoryData.text.length);
      document.getElementById(`${category}-text`).innerHTML = `<br>${categoryData.text[randomTextIndex]}`;
      document.getElementById(`${category}-text`).style.display = 'block';  // Text anzeigen
      document.getElementById(`${category}-image`).style.display = 'none';  // Bild verstecken
    } else {
      // Zeige zufälliges Bild
      const randomImageIndex = Math.floor(Math.random() * categoryData.image.length);
      const image = document.getElementById(`${category}-image`);
      image.src = categoryData.image[randomImageIndex];
      image.style.display = 'block';  // Bild anzeigen
      image.style.width = "1000px";  // Setze die Bildbreite auf 1000px
      image.style.height = "auto";   // Höhe automatisch anpassen, um das Seitenverhältnis zu erhalten

      // Dynamisch den Container anpassen, wenn ein Bild angezeigt wird
      categoryContainer.style.width = "700px";  // Containerweite auf "auto" setzen, um das Bild richtig darzustellen
      document.getElementById(`${category}-text`).style.display = 'none';  // Text verstecken
    }
  } else {
    // Für die anderen Kategorien (nur Text)
    const randomIndex = Math.floor(Math.random() * categoryData.text.length);
    document.getElementById(`${category}-text`).innerHTML = `<br>${categoryData.text[randomIndex]}`;
    document.getElementById(`${category}-text`).style.display = 'block';
    document.getElementById(`${category}-image`).style.display = 'none';  // Bild verstecken
  }
  
}




// Pausentimer
let intervalTimer; // Intervall-Timer-Referenz
let intervalRemaining; // Zeit verbleibend im Countdown

function startIntervalTimer() {
  const minutes = parseInt(document.getElementById('interval-timer').value);
  if (!minutes || minutes <= 0) {
    alert("Please enter a valid number of minutes.");
    return;
  }

  // Setze die verbleibende Zeit und starte den Countdown
  intervalRemaining = minutes * 60;
  document.getElementById('interval-timer-display').innerText = formatTime(intervalRemaining);

  intervalTimer = setInterval(() => {
    if (intervalRemaining > 0) {
      intervalRemaining--;
      document.getElementById('interval-timer-display').innerText = formatTime(intervalRemaining);
    } else {
      clearInterval(intervalTimer);
      const audio = document.getElementById('alertSound'); // Audio-Element holen
      audio.currentTime = 0; // Setzt die Audio-Wiedergabe an den Anfang
      audio.play().catch(error => console.error("Audio playback failed:", error)); // Alarm abspielen
      document.getElementById('interval-timer-display').innerText = "Time's up!";

      // Timer automatisch erneut starten
      startIntervalTimer();
    }
  }, 1000);
}


function stopIntervalTimer() {
  clearInterval(intervalTimer);
  document.getElementById('interval-timer-display').innerText = "Timer stopped.";
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
let pauseAlarms = []; // Speicher für gesetzte Pausenalarme

function addPauseTimes() {
  const pauseTimesContainer = document.getElementById('pause-times');
  pauseTimesContainer.innerHTML = ''; // Reset Container

  for (let i = 0; i < 15; i++) {
    const input = document.createElement('input');
    input.type = 'time';
    input.id = `pause-time-${i}`;
    input.placeholder = "Enter a time";
    pauseTimesContainer.appendChild(input);
    pauseTimesContainer.appendChild(document.createElement('br'));
  }

  // Fügt einen Button hinzu, um die Pausezeiten zu aktivieren
  const activateButton = document.createElement('button');
  activateButton.textContent = "Activate Pause Alarms";
  activateButton.onclick = activatePauseTimes;
  pauseTimesContainer.appendChild(activateButton);
}

function activatePauseTimes() {
  pauseAlarms.forEach(clearTimeout); // Alle bestehenden Alarme entfernen
  pauseAlarms = []; // Reset

  for (let i = 0; i < 15; i++) {
    const input = document.getElementById(`pause-time-${i}`);
    if (!input || !input.value) continue;

    const now = new Date();
    const [hours, minutes] = input.value.split(":").map(Number);
    const alarmTime = new Date();
    alarmTime.setHours(hours, minutes, 0, 0);

    // Wenn die Uhrzeit bereits vorbei ist, stelle sie auf den nächsten Tag
    if (alarmTime <= now) {
      alarmTime.setDate(alarmTime.getDate() + 1);
    }

    const timeDifference = alarmTime - now;

    // Setze einen Alarm für diese Zeit
    const timeoutId = setTimeout(() => {
      document.getElementById('alertSound').play();
    }, timeDifference);

    pauseAlarms.push(timeoutId);
  }

  alert("Pause alarms activated!");
}
