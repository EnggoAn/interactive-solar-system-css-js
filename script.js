// Create random stars
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 200; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  star.style.width = Math.random() * 3 + 'px';
  star.style.height = star.style.width;
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  star.style.setProperty('--duration', (Math.random() * 3 + 2) + 's');
  starsContainer.appendChild(star);
}

function showInfo(name, desc) {
  document.getElementById('info-card').style.display = 'block';
  document.getElementById('title').innerText = name;
  document.getElementById('description').innerText = desc;
}

function closeInfo() {
  document.getElementById('info-card').style.display = 'none';
}

function togglePause() {
  const orbits = document.querySelectorAll('.orbit');
  const btn = document.getElementById('pauseBtn');
  const isPaused = orbits[0].classList.contains('paused');

  orbits.forEach(orbit => {
    if (isPaused) orbit.classList.remove('paused');
    else orbit.classList.add('paused');
  });

  btn.innerText = isPaused ? 'Pause Orbits' : 'Resume Orbits';
}