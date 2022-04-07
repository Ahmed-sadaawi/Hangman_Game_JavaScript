/** globale variables **/
const alphabet = 'asdfghjklqwertyuiopmnbvcxz';
// words;
const categories = [
        ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
        ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
        ["manchester", "milan", "madrid", "amsterdam", "prague"]
    ]
    // hint;
const clueCategories = [
    ["Based in Mersyside", "Based in Mersyside", "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", "Once managed by Phil Brown", "2013 FA Cup runners up", "Gazza's first club"],
    ["Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark"],
    ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
];
// get a different word from categories array;
const indexOfWords = categories[Math.floor(Math.random() * categories.length)]
const word = indexOfWords[Math.floor(Math.random() * indexOfWords.length)]
const buttons = document.getElementById('buttons');
const ul = document.createElement('ul');
const hold = document.getElementById('hold');
const ul_dash = document.createElement('ul');
const livesElement = document.getElementById('lives');
const counterElement = document.getElementById('counter');
const categoriesElement = document.getElementById('categories');
const playAgainElement = document.getElementById('play-again');
const hintElement = document.getElementById('hint');
const clueElement = document.getElementById('clue');
let counter = 10;
let length = 0;
var guesses = [];

// console.log(categories.indexOf(indexOfWords));
/** when click the hint */
hintElement.onclick = function() {
    const sameIndexOfWords = categories.indexOf(indexOfWords);
    const sameWord = indexOfWords.indexOf(word);
    clueElement.innerHTML = `Clue: - ${clueCategories[sameIndexOfWords][sameWord]}`;
    hintElement.classList.add('pointer__events');
}
console.log(categories.indexOf(indexOfWords));
console.log(indexOfWords.indexOf(word))
console.log(word)


if (categories.indexOf(indexOfWords) === 0) {
    categoriesElement.innerHTML = "The Chosen Category Is Premier League Football Teams";
}
if (indexOfWords === categories[1]) {
    categoriesElement.innerHTML = "The Chosen Category Is Films";
}
if (indexOfWords === categories[2]) {
    categoriesElement.innerHTML = "The Chosen Category Is Cities";
}

// loop for create letters;
for (i = 0; i < alphabet.length; i++) {
    const li = document.createElement('li') // create li element 26 letter;
    li.innerHTML = alphabet[i] // put to inner element one letter by the index in for loop;
    ul.appendChild(li) //append li to ul;
    buttons.appendChild(ul) // append ul to the div with class buttons;

    // when click on the letters;
    li.onclick = function(e) {
        this.setAttribute('id', 'clicked')
        const guess = this.innerHTML
        this.onclick = null

        for (i = 0; i < word.length; i++) {
            if (word[i] === guess) {
                guesses[i].innerHTML = guess;
                length += 1;
            }
        }
        if (length === guesses.length) {
            livesElement.innerHTML = 'You win 👏👏🎉🥳';
            livesElement.setAttribute('id', 'you-win');
        }

        var j = word.indexOf(guess)
        if (j === -1) {
            counter -= 1;
            drowArray[counter]();
            console.log(counter)
            counterElement.innerHTML = counter;
            if (counter < 10) {
                counterElement.setAttribute('id', 'span-color')
            }
            if (counter < 1) {
                livesElement.innerHTML = 'Game over!🥺😢'
                livesElement.setAttribute('id', 'game-over')
            }
        }
    }
}

// repeat dash ;
for (i = 0; i < word.length; i++) {
    var li_dash = document.createElement('li')
    li_dash.innerHTML = '_'
    guesses.push(li_dash)
    ul_dash.appendChild(li_dash)
    hold.appendChild(ul_dash)
}




/**
 * TODO: drow the man you knew about a game "Hangman";
 */
const canvasElement = document.getElementById('canvas');
const ctx = canvasElement.getContext('2d');

ctx.strokeStyle = "#fff";
ctx.lineWidth = "2";


function rightLeg() {
    ctx.beginPath();
    ctx.moveTo(150, 200);
    ctx.lineTo(190, 240);
    ctx.stroke();
}

function leftLeg() {
    ctx.beginPath();
    ctx.moveTo(150, 200);
    ctx.lineTo(110, 240);
    ctx.stroke();
}

function rightHand() {
    ctx.beginPath();
    ctx.moveTo(150, 160);
    ctx.lineTo(200, 170);
    ctx.stroke();
}

function leftHand() {
    ctx.beginPath();
    ctx.moveTo(150, 160);
    ctx.lineTo(110, 170);
    ctx.stroke();
}

function head() {
    ctx.beginPath();
    ctx.arc(150, 134, 14, 0, Math.PI * 2, true);
    ctx.stroke();
}

function body() {
    ctx.beginPath();
    ctx.moveTo(150, 148);
    ctx.lineTo(150, 200);
    ctx.stroke();
}

function line() {
    ctx.beginPath();
    ctx.moveTo(150, 100);
    ctx.lineTo(150, 120);
    ctx.stroke();
}

function above() {
    ctx.beginPath();
    ctx.moveTo(20, 100);
    ctx.lineTo(200, 100);
    ctx.stroke();
}

function column() {
    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.moveTo(40, 380);
    ctx.lineTo(40, 100);
    ctx.stroke();
}

function floor() {
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.moveTo(30, 380);
    ctx.lineTo(300, 380);
    ctx.stroke();
}



var drowArray = [
    rightLeg,
    leftLeg,
    rightHand,
    leftHand,
    body,
    head,
    line,
    above,
    column,
    floor
];











/* widow reload on click the play again button */
playAgainElement.onclick = function() {
    window.location.reload();
}