// Constants for main button query selectors
const noun1Btn = document.getElementById("noun1");
const verbBtn = document.getElementById("verb");
const adjectiveBtn = document.getElementById("adjective");
const noun2Btn = document.getElementById("noun2");
const settingBtn = document.getElementById("setting");

// Constants for p tag to display query selectors
const choosenNoun1 = document.getElementById("choosenNoun1");
const choosenVerb = document.getElementById("choosenVerb");
const choosenAdjective = document.getElementById("choosenAdjective");
const choosenNoun2 = document.getElementById("choosenNoun2");
const choosenSetting = document.getElementById("choosenSetting");

// Variables for pre-defined arrays
const nouns1 = ["cat", "dog", "rabbit", "bird"];
const verbs = ["runs", "jumps", "eats", "sleeps"];
const adjectives = ["big", "small", "furry", "friendly"];
const nouns2 = ["house", "tree", "car", "ball"];
const settings = ["park", "beach", "forest", "mountain"];

// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions */

function displayWord(word, element) {
    element.textContent = word;
}

function generateRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function updateWordCounts() {
    noun1Count = (noun1Count + 1) % nouns1.length;
    verbCount = (verbCount + 1) % verbs.length;
    adjectiveCount = (adjectiveCount + 1) % adjectives.length;
    noun2Count = (noun2Count + 1) % nouns2.length;
    settingCount = (settingCount + 1) % settings.length;
}

/* Event Listeners */

noun1Btn.addEventListener("click", () => {
    const randomNoun1 = generateRandomWord(nouns1);
    displayWord(randomNoun1, choosenNoun1);
    updateWordCounts();
});

verbBtn.addEventListener("click", () => {
    const randomVerb = generateRandomWord(verbs);
    displayWord(randomVerb, choosenVerb);
    updateWordCounts();
});

adjectiveBtn.addEventListener("click", () => {
    const randomAdjective = generateRandomWord(adjectives);
    displayWord(randomAdjective, choosenAdjective);
    updateWordCounts();
});

noun2Btn.addEventListener("click", () => {
    const randomNoun2 = generateRandomWord(nouns2);
    displayWord(randomNoun2, choosenNoun2);
    updateWordCounts();
});

settingBtn.addEventListener("click", () => {
    const randomSetting = generateRandomWord(settings);
    displayWord(randomSetting, choosenSetting);
    updateWordCounts();
});

// Concatenate the user story and display
function playback_on_click() {
    const story = `${choosenNoun1.textContent} ${choosenVerb.textContent} ${choosenAdjective.textContent} ${choosenNoun2.textContent} in ${choosenSetting.textContent}.`;
    document.getElementById("story").textContent = story;
}

document.getElementById("playback").addEventListener("click", playback_on_click);

// Generating a random story from the arrays
function random_on_click() {
    const randomStory = `${generateRandomWord(nouns1)} ${generateRandomWord(verbs)} ${generateRandomWord(adjectives)} ${generateRandomWord(nouns2)} in ${generateRandomWord(settings)}.`;
    document.getElementById("story").textContent = randomStory;
}

document.getElementById("random").addEventListener("click", random_on_click);

// Dynamically adding student id/name on click
document.getElementById("studentId").textContent = "200553440/SHIVEN";

