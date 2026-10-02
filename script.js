const acceptedAnswers = [
  ["central line", "central"],
  ["marble arch station", "marble arch"],
  ["baker st", "baker street"],
  ["13"],
  ["honi poke"]
];

const unlockButton = document.getElementById("unlockButton");
const message = document.getElementById("message");

unlockButton.addEventListener("click", checkAnswers);

function cleanAnswer(answer) {
  return answer
    .trim()
    .toLowerCase()
    .replace(/[.,]/g, "");
}

function checkAnswers() {
  const userAnswers = [
    document.getElementById("answer1").value,
    document.getElementById("answer2").value,
    document.getElementById("answer3").value,
    document.getElementById("answer4").value,
    document.getElementById("answer5").value
  ];

  let correctCount = 0;

  userAnswers.forEach((answer, index) => {
    const cleanedAnswer = cleanAnswer(answer);

    const isCorrect = acceptedAnswers[index].some(
      accepted => cleanedAnswer === cleanAnswer(accepted)
    );

    if (isCorrect) {
      correctCount++;
    }
  });

  if (correctCount === acceptedAnswers.length) {
    message.textContent = "5 out of 5 correct...";

    document.body.classList.add("shake");

    setTimeout(() => {
      showKey();
    }, 700);

    setTimeout(() => {
      window.location.href = "video.html";
    }, 3500);

  } else {
    message.textContent = `You've got ${correctCount} out of 5 correct.`;
  }
}

function showKey() {
  const keyOverlay = document.createElement("div");
  keyOverlay.classList.add("key-overlay");

  const key = document.createElement("div");
  key.classList.add("key-icon");
  key.textContent = "🔑";

  const text = document.createElement("div");
  text.classList.add("unlock-text");
  text.textContent = "LOCATION UNLOCKED";

  keyOverlay.appendChild(key);
  keyOverlay.appendChild(text);

  document.body.appendChild(keyOverlay);

  setTimeout(() => {
    keyOverlay.classList.add("show");
  }, 50);
}