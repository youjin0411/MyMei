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

    if (score === 100) {
        result += "당신은 마이스터고를 잘 아시는군요!!";
    } else if (score >= 50) {
        result += "마이스터고에 대해 조금만 더 공부하시면 완벽할 것 같습니다!";
    } else {
        result += "아쉽지만 마이스터고와는 인연이 없는 것 같군요";
    }

    document.getElementById('result').innerHTML = result;
}