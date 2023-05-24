// Typewriter Effect

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

var phrases = " ";
const el = document.getElementById("typewriter");

let sleeptime = 65;

let curPhraseIndex = 0;

const writeLoop = async () => {
  while(true) {
    let curWord = phrases[curPhraseIndex];
    
    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleeptime);
    }

    await sleep(sleeptime * 45);

    for (let i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleeptime);
    }

    await sleep(sleeptime);

    if (curPhraseIndex === phrases.length - 1) {
      curPhraseIndex = 0
    } else {
      curPhraseIndex++;
    }
  }
};

writeLoop();

// MenuBTN active
const menuBtn = document.querySelector(".menu-btn")
const navigation = document.querySelector(".nav-item")

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle('active')
});
