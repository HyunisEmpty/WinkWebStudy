const boxes = document.querySelectorAll(".box");
const contextMenu = document.getElementById("context-menu");
let currentBox = null; // 현재 우클릭한 박스를 저장

// 우클릭 이벤트 처리
boxes.forEach(box => {
    box.addEventListener("contextmenu", (event) => {
        event.preventDefault(); // 기본 우클릭 메뉴 방지
        currentBox = event.target; // 현재 클릭한 박스를 저장

        // 컨텍스트 메뉴 위치 설정
        contextMenu.style.top = `${event.clientY}px`;
        contextMenu.style.left = `${event.clientX}px`;
        contextMenu.style.display = "block";
    });
});

// 컨텍스트 메뉴에서 체크박스 추가
document.getElementById("add-checkbox").addEventListener("click", () => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    currentBox.appendChild(checkbox);
    contextMenu.style.display = "none"; // 메뉴 닫기
});

// 컨텍스트 메뉴에서 텍스트박스 추가
document.getElementById("add-textbox").addEventListener("click", () => {
    const textbox = document.createElement("input");
    textbox.type = "text";
    textbox.placeholder = "Enter text";
    currentBox.appendChild(textbox);
    contextMenu.style.display = "none"; // 메뉴 닫기
});

// 클릭 시 컨텍스트 메뉴 닫기
document.addEventListener("click", () => {
    contextMenu.style.display = "none";
});
