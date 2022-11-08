var score = 300;
var questionArray = [
    {'question':'Commonly used data types Do Not Include:', 'options':{'1':'1. strings', '2':'2. booleans', '3': '3. alerts', '4':'4. numbers'}, 'correctAnswer':'3. alerts'},
    {'question':'The condition in an if/else statement is enclosed with _____.', 'options':{'1':'1. quotes', '2':'2. curly brackets', '3': '3. parenthesis', '4':'4. square brackets'}, 'correctAnswer':'3. parenthesis'},
    {'question':'Arrays in Javascript can be used to store _____.', 'options':{'1':'1. numbers and strings', '2':'2. other arrays', '3': '3. booleans', '4':'4. all of the above'}, 'correctAnswer':'4. all of the above'},
    {'question':'String values must be enclosed within _____ when being assigned to variables', 'options':{'1':'1. commas', '2':'2. curly brackets', '3': '3. quotes', '4':'4. parenthesis'}, 'correctAnswer':'3. quotes'},
    {'question':'A very useful tool used during development and debugging for printing content to the debugger is:', 'options':{'1':'1. JavaScript', '2':'2. terminal/bash', '3': '3. for loops', '4':'4. console.log'}, 'correctAnswer':'4. console.log'}
];
var idx=0;

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
            document.getElementById("resultComments").textContent = `Time's up!`
        } else if(idx>=questionArray.length){
            clearInterval(timing);
            showresult();
            document.getElementById("resultComments").textContent = `All done!`
        }
    }
}

function showresult(){
    document.getElementById("results").style.display = 'block';
    document.getElementById("quiz").style.display = 'none';
    document.getElementById("score").textContent = `Your final score is ${score}.`;
}

function showquiz(){
    if(idx<questionArray.length){
        document.getElementById("questions").textContent = questionArray[idx].question;
        document.getElementById("option1").textContent = questionArray[idx].options[1];
        document.getElementById("option2").textContent = questionArray[idx].options[2];
        document.getElementById("option3").textContent = questionArray[idx].options[3];
        document.getElementById("option4").textContent = questionArray[idx].options[4];
    }
}

// check whether the correct answers are selected
function checkAnswer(){
    event.preventDefault();
    var answer = event.target.textContent;
    var comment = document.getElementById("comments");

    if(answer == questionArray[idx].correctAnswer){
        comment.textContent =`Correct!`;
        idx++;
        showquiz();
    } else {
        comment.textContent = `Wrong!`;
        score -= 10;
    }
}

function submit(){
    event.preventDefault();
    let int = document.getElementById("initials").value;
    document.getElementById("scorelist").innerHTML += `<li class="list-item">${int}: ${score} </li>`;
    ShowHighScore();
}

function ShowHighScore(){
    document.getElementById("ShowHighScore").style.display='block';
    document.getElementById("results").style.display='none';
    document.getElementById("timer").style.display='none';
    document.getElementById("homepage").style.display='none';
    document.getElementById("quiz").style.display='none';
    document.getElementById("highscore").style.display='none';
}

function goBack(){
    idx = 0;
    document.getElementById("timer").textContent=`Timer: 300`;
    document.getElementById("ShowHighScore").style.display='none';
    document.getElementById("results").style.display='none';
    document.getElementById("timer").style.display='block';
    document.getElementById("homepage").style.display='block';
    document.getElementById("quiz").style.display='none';
    document.getElementById("highscore").style.display='block';
}

function clearHighscore(){
    document.getElementById("scorelist").innerHTML='';
}