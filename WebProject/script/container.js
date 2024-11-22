const container = document.querySelector('.container');

let emptyDay = 3; // 2025년은 수요일에 시작한다.
let n = 365; // 임의의 n 값
n = n + emptyDay;

for (let i = 1; i <= n; i++) {
    const box = document.createElement('div');
    box.className = 'box';

    container.appendChild(box); // container에 div 추가

    const pTag = document.createElement('p'); // p 태그 생성

    // 2024년 제외
    if (i > emptyDay){  
        pTag.textContent = i - emptyDay; // p 태그에 날짜 추가
    }

    box.appendChild(pTag); // div 안에 p 태그 추가
}
