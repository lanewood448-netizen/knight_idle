const player = document.getElementById("player");

let isAttacking = false;

function setState(state) {
  player.className = "";
  player.classList.add(state);
}

function attack() {
  if (isAttacking) return;

  isAttacking = true;
  setState("attack");

  setTimeout(() => {
    setState("idle");
    isAttacking = false;
  }, 500); // ต้องเท่ากับ animation เวลาใน CSS
}

// เริ่มต้นที่ idle
setState("idle");

// ออโต้โจมตีทุก 2 วินาที
setInterval(attack, 2000);