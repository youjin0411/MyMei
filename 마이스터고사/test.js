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

    var result =  score ;
 


    if (score === 100 || score===90) {
        window.location.href = 'gold.html?result=' + result; // result 값을 gold.html로 전달


    } else if (score === 80 || score===70 || score===60 || score===50) {
        window.location.href = 'silver.html?result=' + result; // result 값을 gold.html로 전달
    } 
    else {
        window.location.href = 'copper.html?result=' + result; // result 값을 gold.html로 전달
    } 

}
