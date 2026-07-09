// 유저가 값을 입력한다
// + 버튼을 클릭하면, 할일이 추가된다
// delete버튼을 누르면 할일이 삭제된다
// check버튼을 누르면 할일이 끝나면서 밑줄이 간다
// 진행중 끝남 탭을 누르면, 언더바가 이동한다
// 끝남탭은, 끝나 아이템만, 진행중탭은 진행중인 아이템만
// 전체탭을 누르면 다시 전체아이템으로 돌아옴

// 추가 넣기
// =====================================================
// 소리 켜기/끄기 (script.js)
// 원리: video 요소에는 muted 라는 속성이 있고,
//       true면 음소거 / false면 소리 남.
//       버튼을 누를 때마다 이 값을 '반전'시키면 끝!
// =====================================================

// original part
let taskInput = document.getElementById("task-input");
let addButton=document.getElementById("add-button");
let taskList=[]
addButton. addEventListener("click",addTask)

function addTask(){
  let taskContent = taskInput.value
  taskList.push(taskContent)
}

function render(){
  let resultHTML = "";
  for(let i = 0; i < taskList.length; i++) {
    resultHTML += '<div class="task">
        <div class="white">${taskList[i]}</div>
    <div>
        <button>Check</button>
        <button>Delete</button>
    </div>
</div>';
  }

  document.getElementById("task-board").innerHTML = resultHTML;
}


const video = document.getElementById("bg-video");
const soundBtn = document.getElementById("sound-btn");
 
soundBtn.addEventListener("click", function () {
  // !video.muted : 현재 값의 '반대'
  // true(음소거) → false(소리 켬), false → true 로 뒤집기
  video.muted = !video.muted;
 
  // 버튼 글자도 현재 상태에 맞게 바꿔주기
  if (video.muted) {
    soundBtn.textContent = "🔇 소리 켜기";   // 지금 꺼져 있음 → '켜기' 안내
  } else {
    soundBtn.textContent = "🔊 소리 끄기";   // 지금 켜져 있음 → '끄기' 안내
video.play(); 
}
});