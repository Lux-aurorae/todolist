// =====================================================
// 할일 리스트 (script.js)
// 구조: 배열(taskList)이 원본 → 바뀔 때마다 render()로 다시 그림
// =====================================================

// ---------- 요소 가져오기 ----------
const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskBoard = document.getElementById("task-board");
const tabs = document.querySelectorAll(".tab");   // 탭 3개 한꺼번에
const underBar = document.getElementById("under-bar");

// ---------- 데이터 ----------
let taskList = [];        // 할일 원본 배열
let currentTab = "all";   // 지금 탭: "all" | "ing" | "done"

// ---------- ① 할일 추가 ----------
function addTask() {
  if (taskInput.value.trim() === "") return;   // 빈 값 검문소

  const task = {
    id: Date.now(),           // 고유번호 (현재 시각 밀리초)
    content: taskInput.value,
    isComplete: false
  };

  taskList.push(task);
  taskInput.value = "";
  render();
}

// ---------- ② 완료 체크 ↔ 되돌리기 (토글) ----------
function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList[i].isComplete = !taskList[i].isComplete;  // 반대로 뒤집기
      break;
    }
  }
  render();
}

// ---------- ③ 삭제 ----------
function deleteTask(id) {
  taskList = taskList.filter(function (task) {
    return task.id !== id;    // 지울 id만 빼고 남기기 = 삭제
  });
  render();
}

// ---------- ④ 화면 그리기 (심장!) ----------
function render() {
  // 1) 탭에 맞는 목록 고르기
  let list = [];
  if (currentTab === "all") {
    list = taskList;
  } else if (currentTab === "ing") {
    list = taskList.filter(function (t) { return t.isComplete === false; });
  } else if (currentTab === "done") {
    list = taskList.filter(function (t) { return t.isComplete === true; });
  }

  // 2) HTML 문자열 조립
  let resultHTML = "";
  for (let i = 0; i < list.length; i++) {
    resultHTML += `
      <div class="task-row">
        <span class="${list[i].isComplete ? "done" : ""}">${list[i].content}</span>
        <button onclick="toggleComplete(${list[i].id})">
          ${list[i].isComplete ? "되돌리기" : "check"}
        </button>
        <button onclick="deleteTask(${list[i].id})">delete</button>
      </div>
    `;
  }

  // 3) 화면에 반영
  taskBoard.innerHTML = resultHTML;
}

// ---------- ⑤ 탭 전환 + 언더바 이동 ----------
function switchTab(event) {
  if (event.target.id === "tab-all") currentTab = "all";
  if (event.target.id === "tab-ing") currentTab = "ing";
  if (event.target.id === "tab-done") currentTab = "done";

  // 언더바를 클릭된 탭의 위치·너비로
  underBar.style.left = event.target.offsetLeft + "px";
  underBar.style.width = event.target.offsetWidth + "px";

  render();
}

// ---------- 이벤트 연결 ----------
addButton.addEventListener("click", addTask);

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", switchTab);
}

// ---------- 시작: 전체 탭에 언더바 놓고 출발 ----------
underBar.style.left = tabs[0].offsetLeft + "px";
underBar.style.width = tabs[0].offsetWidth + "px";
render();