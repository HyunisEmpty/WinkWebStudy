// .container 내의 모든 .box 요소 선택
const boxes = document.querySelectorAll('.container .box');
const infoPanel = document.querySelector('.info-panel'); // 우측 정보 영역

// 더블클릭 이벤트에 사용할 상태 저장
let selectedBox = null;

// 각 박스에 클릭 이벤트 추가
boxes.forEach((box, index) => {
    box.addEventListener('dblclick', () => {
        // 두 번 클릭 시 info-panel에 입력란 추가
        selectedBox = box; // 현재 박스를 추적
        
        // 기존 입력란 제거 후 새로 추가
        infoPanel.innerHTML = ''; // 기존 내용을 초기화
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.placeholder = '텍스트를 입력하세요';
        inputField.style.width = '100%';
        inputField.style.marginBottom = '10px';
        inputField.style.boxSizing = 'border-box'; // padding 포함 설정

        // 추가 버튼 생성
        const submitButton = document.createElement('button');
        submitButton.textContent = '적용';
        submitButton.style.marginLeft = '10px';

        // 입력란 및 버튼을 infoPanel에 추가
        infoPanel.appendChild(inputField);
        infoPanel.appendChild(submitButton);

        // 버튼 클릭 시 입력 텍스트를 박스에 div로 추가
        submitButton.addEventListener('click', () => {
            if (selectedBox) {
                // 새 div 생성
                const newContent = document.createElement('div');
                newContent.textContent = inputField.value; // 입력값을 설정
                newContent.style.textAlign = 'center';    // 텍스트 중앙 정렬
                newContent.style.fontSize = '1rem';       // 텍스트 크기 조정
                newContent.style.marginTop = '5px';       // 위 요소와 간격 추가
                newContent.style.padding = '5px';         // 내부 여백 추가
                newContent.style.backgroundColor = '#dddddd'; // 배경색으로 구분

                // 새 div를 선택된 박스에 추가
                selectedBox.appendChild(newContent);
            }

            // 입력란 초기화
            infoPanel.textContent = '일정이 추가되었습니다.';
        });

    });
});
