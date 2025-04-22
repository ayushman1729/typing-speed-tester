const sentences = [
    "Practice makes perfect",
    "Typing is a useful skill",
    "JavaScript is fun",
    "Speed matters in typing tests"
  ];
  
  const displaySentence = document.getElementById("sentence");
  const userInput = document.getElementById("input");
  const result = document.getElementById("result");
  const startBtn = document.getElementById("start-btn");
  
  let startTime, endTime;
  
  function startTest() {
    let randomIndex = Math.floor(Math.random() * sentences.length);
    displaySentence.innerText = sentences[randomIndex];
    userInput.value = "";
    result.innerText = "";
    startTime = new Date().getTime();
    userInput.disabled = false;
    userInput.focus();
  }
  
  function endTest() {
    endTime = new Date().getTime();
    let totalTime = (endTime - startTime) / 1000; // in seconds
    let typedText = userInput.value.trim();
    let wordCount = typedText.split(" ").length;
    let speed = Math.round((wordCount / totalTime) * 60);
    let originalText = displaySentence.innerText.trim();
  
    // Accuracy count
    let correctWords = 0;
    let typedWords = typedText.split(" ");
    let originalWords = originalText.split(" ");
  
    for (let i = 0; i < typedWords.length; i++) {
      if (typedWords[i] === originalWords[i]) {
        correctWords++;
      }
    }
  
    let accuracy = Math.round((correctWords / originalWords.length) * 100);
  
    result.innerText =`Speed: ${speed} WPM | Accuracy: ${accuracy}%`;
    userInput.disabled = true;
  }
  
  startBtn.addEventListener("click", startTest);
  
  userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      e.preventDefault(); // so textarea doesn't go to new line
      endTest();
    }
  });