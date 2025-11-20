// ================================================
// Variables
// ================================================
const menu = document.getElementById("menu");
const gameContent = document.getElementById("gameContent");
const menuBtn = document.getElementById("menuBtn");
const bgMusic = document.getElementById("bgMusic");
const menuList = document.getElementById("menuList").children;
let index = 0;

// ================================================
// Navegación del menú (teclado)
// ================================================
function updateMenuSelection() {
  for (let i = 0; i < menuList.length; i++) {
    menuList[i].classList.remove("selected");
  }
  menuList[index].classList.add("selected");
}

document.addEventListener("keydown", (e) => {
  if (!menu.classList.contains("active")) return;

  if (e.key === "ArrowDown") {
    index = (index + 1) % menuList.length;
    updateMenuSelection();
  }

  if (e.key === "ArrowUp") {
    index = (index - 1 + menuList.length) % menuList.length;
    updateMenuSelection();
  }

  if (e.key === "Enter") {
    startGame();
  }
});

// ================================================
// Abrir contenido
// ================================================
function startGame() {
  menu.classList.remove("active");
  gameContent.classList.remove("hidden");
  bgMusic.play().catch(() => {});
}

// ================================================
// Botón HUD para Mostrar/Ocultar menú
// ================================================
menuBtn.addEventListener("click", () => {
  const isOpen = menu.classList.contains("active");

  if (isOpen) {
    menu.classList.remove("active");
    gameContent.classList.remove("hidden");
    bgMusic.play();
  } else {
    menu.classList.add("active");
    gameContent.classList.add("hidden");
    bgMusic.pause();
  }
});