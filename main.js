let score = 0;
const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");

function spawnStars() {
    gameArea.innerHTML = ""; 
    const totalStars = 5;
    const goldenIndex = Math.floor(Math.random() * totalStars);

    for (let i = 0; i < totalStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.textContent = i === goldenIndex ? "🌟" : "⭐";
        star.style.left = Math.random() * 270 + "px";
        star.style.top = Math.random() * 270 + "px";

        if (i === goldenIndex) {
            star.addEventListener("click", () => {
                score++;
                scoreDisplay.textContent = score;
                spawnStars();
            });
        }
        gameArea.appendChild(star);
    }
}

setInterval(spawnStars, 1500); 
spawnStars();
