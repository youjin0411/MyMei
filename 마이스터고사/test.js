function calculateScore() {
    var score = 0;
    var q1 = document.querySelector('input[name="q1"]:checked').value;
    var q2 = document.querySelector('input[name="q2"]:checked').value;
    var q3 = document.querySelector('input[name="q3"]:checked').value;

    if (q1 === 'a') {
        score += 1;
    }
    if (q2 === 'a') {
        score += 1;
    }
    if (q3 === 'a') {
        score += 1;
    }

    var result = "당신의 점수는 " + score + "점입니다.";

    if (score === 3) {
        result += " 완벽한 점수입니다! 축하합니다!";
    } else if (score >= 2) {
        result += " 좋은 점수입니다!";
    } else {
        result += " 아쉽지만 조금 더 공부해보세요.";
    }

    document.getElementById('result').innerHTML = result;
}