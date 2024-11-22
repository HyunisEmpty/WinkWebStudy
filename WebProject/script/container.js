const n = 25; // 임의의 n 값
const container = document.querySelector('.container');

for (let i = 1; i <= n; i++) {
    const box = document.createElement('div');
    box.className = 'box';

    container.appendChild(box); // container에 div 추가

    const pTag = document.createElement('p'); // p 태그 생성
    pTag.textContent = i; // p 태그에 날짜 추가

    box.appendChild(pTag); // div 안에 p 태그 추가
}
