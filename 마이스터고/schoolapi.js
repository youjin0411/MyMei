//.date-grid-container > .grid-item에 mouseover 이벤트 발생하면, handler를 지정하자
const handler = (event) => {
    let url = `www.career.go.kr/cnet/openapi/getOpenApi?apiKey=357a5d497c55810208851c12f6edd042&svcType=api&svcCode=SCHOOL&contentType=json&gubun=high_list&sch2=100374`;
    console.log(url);
    getSchoolByAPI(url);
}

//AJAX로 url 호출하자 (Asynchronous JavaScript And XML)수정하자 
const getSchoolByAPI = (url) => {
    //XMLHttpRequest 만들자(객체 생성)
    let xhr = new XMLHttpRequest(); //https 서버 만들기

    //callback(세팅)
    //onreadystatechange => 준비 상태가 변화했을 때, onclick과 유사
    xhr.onreadystatechange = () => {
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200){ //요청이 끝났고, 그것의 상태가 200으로 제대로 왔으면
            //success
            console.log("성공");
            // console.log(xhr.response);
            showMenu(xhr.response);
        }else{
            //fail
        }
    }

    //요청을 보낼 방식, url, 비동기여부 설정하자
    xhr.open("GET", url, true); 

    //요청 전송하자
    xhr.send();
}
const showMenu = (jsonString) => {
    // console.log(jsonString);
    //jsonString -> json
    let json = JSON.parse(jsonString); //Json.stringify():json -> String
    // console.log(json);    
    //json -> 조식, 중식, 석식]
    let schoolname = "없음";
    let link = "없음";
    let major = "없음";
    try{
        schoolname = json["schoolName"]; 
    }catch{
    }    
    try{
        link = json["schoolName"];
    }catch{
    }
    try{
        major = json["schoolName"];
    }catch{
    }

    schoolname.innerHTML = schoolname;
    link.innerHTML = link;
    dinmajorner.innerHTML = major;
}