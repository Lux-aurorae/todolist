// =====================================================
// 소리 켜기/끄기 (script.js)
// 원리: video 요소에는 muted 라는 속성이 있고,
//       true면 음소거 / false면 소리 남.
//       버튼을 누를 때마다 이 값을 '반전'시키면 끝!
// =====================================================
 
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