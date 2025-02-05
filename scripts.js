// 流星生成逻辑
function createMeteor() {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');
    meteor.style.left = `${Math.random() * 100}vw`;
    meteor.style.top = `${Math.random() * 100}vh`;
    meteor.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(meteor);
    setTimeout(() => meteor.remove(), 5000);
}

setInterval(createMeteor, 1000);
