/*
 * ===============================================================
 *  ██ ▄█▀ ██ ██     ██ ██      ██ ▄████▄ ██ ▄█▀ ██████ 
 *  ████   ██ ██ ▄█▄ ██ ██      ██ ██▄▄██ ████   ██▄▄   
 *  ██ ▀█▄ ██  ▀██▀██▀  ██   ████▀ ██  ██ ██ ▀█▄ ██▄▄▄▄ 
 * ===============================================================
 *  File      : script.js
 *  Project   : KiwiJake.github.io
 *  Author    : KIWI JAKE
 *  Created   : Mon May 11 2026
 *  Modified  : Sun May 24 2026
 * ===============================================================
 */

// ── MATRIX RAIN ──
const canvas = document.getElementById('Matrix');
const context = canvas.getContext('2d');

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums     = '0123456789';
const alphabet = katakana + latin + nums;

const fontSize = 16;
const rainDrops = [];

function initDrops() {
  const cols = Math.floor(canvas.width / fontSize);
  rainDrops.length = 0;
  for (let x = 0; x < cols; x++) rainDrops[x] = 1;
}

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
  // Clear any lingering fade trails from the old frame
  context.clearRect(0, 0, canvas.width, canvas.height);
  initDrops();
}

resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const draw = () => {
  context.fillStyle = 'rgba(0, 0, 0, 0.05)';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = '#0F0';
  context.font = fontSize + 'px monospace';

  for (let i = 0; i < rainDrops.length; i++) {
    const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    context.fillText(text, i * fontSize, rainDrops[i] * fontSize);
    if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[i] = 0;
    }
    rainDrops[i]++;
  }
};

setInterval(draw, 30);

// ── GAME ──
function openGame() {
  window.open('Godot/index.html', '_blank');
}


