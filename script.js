/* พิมพ์ข้อความอัตโนมัติ */
const message =
"情人節快樂 💕\n" +
"謝謝你一直陪在我身邊\n" +
"因為有你，每一刻都變得很珍貴\n" +
"我真的很愛你 💖";

let i = 0;
const typingEl = document.getElementById("typing");
const btn = document.getElementById("nextBtn");

if (typingEl) {
  const typing = setInterval(() => {
    if (i < message.length) {
      typingEl.innerHTML += message[i] === "\n" ? "<br>" : message[i];
      i++;
    } else {
      clearInterval(typing);
      btn.style.display = "inline-block";
    }
  }, 80);
}

/* หัวใจลอย */
function createFloatingHearts() {
  const container = document.createElement("div");
  container.className = "floating-hearts";
  document.body.appendChild(container);

  setInterval(() => {
    const heart = document.createElement("span");
    heart.innerHTML = ["💗","💖","💕","💞"][Math.floor(Math.random()*4)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 16 + Math.random() * 20 + "px";
    heart.style.animationDuration = 5 + Math.random() * 5 + "s";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
  }, 300);
}
createFloatingHearts();

/* ปุ่ม Next ระเบิดหัวใจ */
function goNext() {
  explode();
  setTimeout(() => {
    window.location.href = "gallery.html";
  }, 800);
}

function explode() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    document.body.appendChild(heart);

    const x = (Math.random() - 0.5) * window.innerWidth;
    const y = (Math.random() - 0.5) * window.innerHeight;

    heart.animate([
      { transform: "translate(0,0)", opacity: 1 },
      { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
    ], { duration: 800 });

    setTimeout(() => heart.remove(), 800);
  }
}

/* เซอร์ไพรส์สุดท้าย */
function finalBoom() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = "50%";
    heart.style.top = "50%";
    document.body.appendChild(heart);

    const x = (Math.random() - 0.5) * window.innerWidth;
    const y = (Math.random() - 0.5) * window.innerHeight;

    heart.animate([
      { transform: "translate(0,0)", opacity: 1 },
      { transform: `translate(${x}px, ${y}px) scale(2)`, opacity: 0 }
    ], { duration: 1500 });

    setTimeout(() => heart.remove(), 1500);
  }
}
