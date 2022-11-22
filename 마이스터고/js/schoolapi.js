const link = `https://www.career.go.kr/cnet/openapi/getOpenApi?apiKey=357a5d497c55810208851c12f6edd042&svcType=api&svcCode=SCHOOL&contentType=json&gubun=high_list&sch2=100374`;

// 비동기로 호출하자
fetch(link).then((response) => response.json()).then((json) => console.log(json));

// AJAX로 link 호출
let getMenuByAPI = (link) => {
    // XMLHttpRequest
    let xhr = new XMLHttpRequest();

    // callback
    xhr.onreadystatechange = () => {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            //리퀘스트가 다 끝나서 응답이 왔다면
            console.log("성공");
            // console.log(xhr.response);
            show(xhr.response); // json 파싱함수 호출
        } else {
            //실패
        }
    }

    // 요청을 보낼 방식, link, 비동기여부 설정하자
    xhr.open("GET", link, true);

    // 요청 전송
    xhr.send();
}

getMenuByAPI(link)

const show = (jsonString) => {
    // var title = document.querySelector('.grid-main-T');
    let json = JSON.parse(jsonString);
    let getJsonData = json["dataSearch"]["content"]
        // let schoolName = getJsonData[0]["schoolName"]
        // let adress = getJsonData[0]["adres"]
        // console.log(getJsonData)
        // console.log(schoolName)
        // console.log(adress)
    for (let i = 0; i < getJsonData['length']; i++) {
        var num = String(i)
        var title1 = document.querySelector(`.grid-main-T0`);
        title1.innerHTML = `<div>${getJsonData[0]["schoolName"]}<div>`;
        var title2 = document.querySelector(`.grid-main-T1`);
        title2.innerHTML = `<div>${getJsonData[1]["schoolName"]}<div>`;
        // console.log(getJsonData[i]["schoolName"])
    }
}