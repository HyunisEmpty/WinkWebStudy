// 요일 배열
const days = ['일', '월', '화', '수', '목', '금', '토'];

// .day 클래스를 가진 요소 선택
const dayContainer = document.querySelector('.day');

// days 배열 요소 접근및 h3태그로 변환
for (let day of days) {
    const dayElement = document.createElement("p");
    dayElement.textContent = day;

    // 요일 추가
    dayContainer.appendChild(dayElement);
}

