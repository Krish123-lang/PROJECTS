const questions = [{
    'que': 'which of the following is a markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'JavaScript',
    'd': 'PHP',
    'correct': 'a'
},
{
    'que': 'What is software?',
    'a': 'flexible parts of a computer case',
    'b': 'any part of the computer that has a physical structure',
    'c': 'instructions that tell the hardware what to do',
    'd': 'clothing designed to be worn by computer users',
    'correct': 'c'
},
{
    'que': 'The computer’s main circuit board is called a ________?',
    'a': 'Bluetooth card',
    'b': 'motherboard',
    'c': 'hard drive',
    'd': 'monitor',
    'correct': 'b'
},
{
    'que': 'RAM is like a computer’s ________, while a hard drive is like a computer’s ________',
    'a': 'short-term memory/long-term memory',
    'b': 'brain/nervous system',
    'c': 'long-term memory/short-term memory',
    'd': 'nervous system/brain',
    'correct': 'a'
},
{
    'que': 'What is an Ethernet port used for?',
    'a': 'Connecting smartphones and other peripherals',
    'b': 'Creating new user accounts',
    'c': 'Providing power to the computer',
    'd': 'Connecting to the Internet',
    'correct': 'd'
},
{
    'que': 'What is Wi-Fi?',
    'a': 'An extra-wide computer case used by servers',
    'b': 'A type of wireless network',
    'c': 'A type of software that scans for viruses',
    'd': 'A type of sound card',
    'correct': 'b'
},
{
    'que': 'Windows, macOS, and Linux are examples of ________',
    'a': 'operating systems',
    'b': 'web browsers',
    'c': 'mobile devices',
    'd': 'Internet service providers',
    'correct': 'a'
},
{
    'que': 'What does "GUI" stand for?',
    'a': 'Graphical user interface',
    'b': 'Good used iPhone',
    'c': 'Gateway using Intel',
    'd': 'Global user index',
    'correct': 'a'
},
{
    'que': 'Fitness trackers and smartwatches are examples of',
    'a': 'wearables.',
    'b': 'smartphones',
    'c': 'game consoles.',
    'd': 'TVs',
    'correct': 'a'
},
{
    'que': 'Which operating system is MOST typically found on PC computers?',
    'a': 'iOS',
    'b': 'macOS',
    'c': 'windows',
    'd': 'Linux',
    'correct': 'c'
},
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options');
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }
    reset();
    const data = questions[index]
    console.log(data)
    quesBox.innerText = ` ${index + 1}) ${data.que} `;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans == data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align: center">
        <h3> Thank you for playing the quiz</h3>
        <h2> ${right}/${total} are correct</h2>
    </div>
    `
}
loadQuestion();
