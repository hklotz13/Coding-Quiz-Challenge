function highScores() {
    let highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
    for (let i = 0; i<highscores.length; i++) {
        let scoreEl = document.createElement('li');
        scoreEl.textContent = highscores[i].initials + ' ' + highscores[i].score;
        let scorePageEl = document.getElementById('highscore-page');
        scorePageEl.appendChild(scoreEl);
    }
}

highScores();