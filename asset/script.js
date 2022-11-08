var score = 100;
var questionArray = [
    {'question':'Commonly used data types Do Not Include:', 'options':{'1':'1. strings', '2':'2. booleans', '3': '3. alerts', '4':'4. numbers'}, 'correctAnswer':'3. alerts'},
    {'question':'The condition in an if/else statement is enclosed with _____.', 'options':{'1':'1. quotes', '2':'2. curly brackets', '3': '3. parenthesis', '4':'4. square brackets'}, 'correctAnswer':'3. parenthesis'},
    {'question':'Arrays in Javascript can be used to store _____.', 'options':{'1':'1. numbers and strings', '2':'2. other arrays', '3': '3. booleans', '4':'4. all of the above'}, 'correctAnswer':'4. all of the above'},
    {'question':'String values must be enclosed within _____ when being assigned to variables', 'options':{'1':'1. commas', '2':'2. curly brackets', '3': '3. quotes', '4':'4. parenthesis'}, 'correctAnswer':'3. quotes'},
    {'question':'A very useful tool used during development and debugging for printing content to the debugger is:', 'options':{'1':'1. JavaScript', '2':'2. terminal/bash', '3': '3. for loops', '4':'4. console.log'}, 'correctAnswer':'4. console.log'}
];
var idx=0;

function ShowHighScore(){
    a
}

// click the 'start quiz' button to trigger timer
function startTimer(){
    var timing = setInterval(timer, 1000);
    document.getElementById("homepage").style.display = 'none';
    document.getElementById("quiz").style.display = 'block';
    showquiz();

    function timer(){
        score--;
        document.getElementById("timer").textContent = `Time: ${score}`;
        if(score<=0){
            clearInterval(timing);
            showresult();
            document.getElementById("resultComments").textContent = `Time's up! Please enter your initials to show your score.`
        } else if(idx>=questionArray.length){
            clearInterval(timing);
            showresult();
            document.getElementById("resultComments").textContent = `Well done! Please enter your initials to show your score.`
        }
    }
}

function showresult(){
    document.getElementById("results").style.display = 'block';
    document.getElementById("quiz").style.display = 'none';
    document.getElementById("score").textContent = `Score: ${score}`;
}

function checkAnswer(){
    a
}

function submit(){
    a
}

function goBack(){
    a
}

function clearHighscore(){
    a
}