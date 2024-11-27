const container = document.querySelector('.container');

// 각 달의 시작일 정보를 배열에 저장 (2025년 기준)
const startDays2025 = [
    1,    // 1월 1일 (1번째 날)
    32,   // 2월 1일 (32번째 날)
    60,   // 3월 1일 (60번째 날)
    91,   // 4월 1일 (91번째 날)
    121,  // 5월 1일 (121번째 날)
    152,  // 6월 1일 (152번째 날)
    182,  // 7월 1일 (182번째 날)
    213,  // 8월 1일 (213번째 날)
    244,  // 9월 1일 (244번째 날)
    274,  // 10월 1일 (274번째 날)
    305,  // 11월 1일 (305번째 날)
    335   // 12월 1일 (335번째 날)
];
stratDaysIndex = 0

let Day2024 = 3; // 2025년은 수요일에 시작한다.
let n =365; // 임의의 n 값
n = n + Day2024;

let cnt = 1;

for (let i = 1; i <= n; i++) {

    // 클래스가 box인 div를 container클래스에 삽입
    const box = document.createElement('div');  
    box.className = 'box';
    container.appendChild(box); 

    const pTag = document.createElement('p'); // p 태그 생성

    // 2025년 인 경우
    if (i > Day2024){  

        if (i - Day2024 == startDays2025[stratDaysIndex]){        // 이번달의 시작달인 경우
            stratDaysIndex += 1;
            cnt = Day2024 + 1
            pTag.textContent = stratDaysIndex + "월 " + (cnt - Day2024);
        }else{
            pTag.textContent = cnt - Day2024;
        }
    }

    

    box.appendChild(pTag); // div 안에 p 태그 추가

    cnt += 1;
}
