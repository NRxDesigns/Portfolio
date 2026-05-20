// Prototype
const screens = [
  "assets/First-Steps/Screens/step-1-welcome.png",
  "assets/First-Steps/Screens/step-2-tutorial.png",
  "assets/First-Steps/Screens/step-3-tutorial.png",
  "assets/First-Steps/Screens/step-4-tutorial.png",
  "assets/First-Steps/Screens/step-5-etfs.png",
  "assets/First-Steps/Screens/step-6-invest.png",
  "assets/First-Steps/Screens/step-7-summary.png",
  "assets/First-Steps/Screens/step-8-done.gif",
  "assets/First-Steps/Screens/step-9-dashboard.png",
];

let currentIndex = 0;

// Select Elements
const displayImage = document.getElementById("display-image");
const counterDisplay = document.getElementById("container-counter"); // error in my manual typing, fixed below
const counterText = document.getElementById("counter");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const viewport = document.getElementById("prototype-viewport");

// Initialize
function init() {
  updateScreen();

  // Allow clicking the screen itself to go to next
  displayImage.addEventListener("click", nextScreen);

  // Button Listeners
  prevBtn.addEventListener("click", prevScreen);
  nextBtn.addEventListener("click", nextScreen);
}

function updateScreen() {
  // Add fade effect
  displayImage.classList.add("fade-out");

  setTimeout(() => {
    // Change the image source
    displayImage.src = screens[currentIndex];

    // Update Counter
    counterText.innerText = `${currentIndex + 1} / ${screens.length}`;

    // Update Button States
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === screens.length - 1;

    // Remove fade effect
    displayImage.classList.remove("fade-out");
  }, 300);
}

function nextScreen() {
  if (currentIndex < screens.length - 1) {
    currentIndex++;
    updateScreen();
  }
}

function prevScreen() {
  if (currentIndex > 0) {
    currentIndex--;
    updateScreen();
  }
}

// Text animation
init();

const textList = [
  "Do you have an ABN?",
  "What is your ABN?",
  "What is your titled?",
  "Full legal name",
  "Preferred name",
  "Gender",
  "What countries are you a citizen of?",
  "What is your mobile number?",
  "What is your email?",
  "What is your home address?",
  "What is your postal address?",
  "Which countries are you a tax resident of?",
  "What is your TFN?",
  "What is your TIN?",
  "What is your employment status?",
  "Primary occupation?",
  "Nature and purpose?",
  "Are you a beneficial owner?",
  "What is your source of wealth?",
  "Where does your money come from?",
  "Do you want to transfer your HIN?",
];

const container = document.getElementById("container");

function createTextElements() {
  textList.forEach((text) => {
    const el = document.createElement("div");
    el.className = "floating-text";
    el.innerText = text;

    // 1. Random Position (X and Y)
    const x = Math.random() * 100 - 50; // -50% to 50%
    const y = Math.random() * 100 - 50; // -50% to 50%
    el.style.left = `calc(50% + ${x}%)`;
    el.style.top = `calc(50% + ${y}%)`;

    // 2. Random Font Size
    const fontSize = Math.random() * (30 - 14) + 14;
    el.style.fontSize = `${fontSize}px`;

    // 3. Random Animation Duration (How long one cycle lasts)
    // Between 5 and 15 seconds
    const duration = Math.random() * (15 - 5) + 5;
    el.style.animationDuration = `${duration}s`;

    // 4. Random Animation Delay
    // IMPORTANT: We use a NEGATIVE delay.
    // This makes the animation start "mid-way" so they don't all appear at once.
    const delay = Math.random() * -15;
    el.style.animationDelay = `${delay}s`;

    container.appendChild(el);
  });
}

createTextElements();
