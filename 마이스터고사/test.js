function calculateScore() {
    var score = 0;
    var q1 = document.querySelector('input[name="q1"]:checked').value;
    var q2 = document.querySelector('input[name="q2"]:checked').value;
    var q3 = document.querySelector('input[name="q3"]:checked').value;
    var q4 = document.querySelector('input[name="q4"]:checked').value;
    var q5 = document.querySelector('input[name="q5"]:checked').value;
    var q6 = document.querySelector('input[name="q6"]:checked').value;
    var q7 = document.querySelector('input[name="q7"]:checked').value;
    var q8 = document.querySelector('input[name="q8"]:checked').value;
    var q9 = document.querySelector('input[name="q9"]:checked').value;
    var q10 = document.querySelector('input[name="q10"]:checked').value;

    if (q1 === 'd') {
        score += 10;
    }
    if (q2 === 'b') {
        score += 10;
    }
    if (q3 === 'c') {
        score += 10;
    }
    if (q4 === 'd') {
        score += 10;
    }
    if (q5 === 'c') {
        score += 10;
    }
    if (q6 === 'd') {
        score += 10;
    }
    if (q7 === 'b') {
        score += 10;
    }
    if (q8 === 'c') {
        score += 10;
    }
    if (q9 === 'a') {
        score += 10;
    }
    if (q10 === 'a') {
        score += 10;
    }

    var result = "당신의 점수는 " + score + "점입니다.";

    if (score == 100) {
        alert("100점");
        alert("축하합니다!");
    } else if (score == 90) {
        alert("90점");
    } else if (score == 80) {
        alert("80점");
        alert("다시 도전해 보세요");
    } else if (score == 70) {
        alert("70점");
        alert("다시 도전해 보세요");
    } else if (score == 60) {
        alert("60점");
        alert("다시 도전해 보세요");
    } else if (score == 50) {
        alert("50점");
        alert("다시 도전해 보세요");
    } else if (score == 40) {
        alert("40점");
        alert("다시 도전해 보세요");
    } else if (score == 30) {
        alert("30점");
        alert("다시 도전해 보세요");
    } else if (score == 20) {
        alert("20점");
        alert("다시 도전해 보세요");
    } else if (score == 10) {
        alert("10점");
        alert("다시 도전해 보세요");
    } else {
        alert("0점");
        alert("다시 도전해 보세요");
    }

    reset();
}

function reset() {
    var radioButtons = document.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < radioButtons.length; i++) {
      radioButtons[i].checked = false;  
    }
  }