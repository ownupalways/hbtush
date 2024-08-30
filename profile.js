let themeBlack = document.querySelector(".theme #nightLight")


function updatedTheme(theme) {
    document.body.className = theme
}

themeBlack.addEventListener('click', changeBackgroundToBlack)

function changeBackgroundToBlack() {
    let currentTheme = localStorage.getItem('theme')
    console.log(currentTheme)
    let changedTheme = currentTheme === 'newTheme' ? 'MyBody' : 'newTheme'
    updatedTheme(changedTheme)
    if(document.body.classList.contains("newTheme")) {
        themeBlack.src = "image/sun.png"
    }else {
        themeBlack.src = "image/moon.png"
    }
    localStorage.setItem('theme', changedTheme);
}

// Apply the saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    updatedTheme(savedTheme);

    if(document.body.classList.contains("newTheme")) {
        themeBlack.src = "image/sun.png"
    }else {
        themeBlack.src = "image/moon.png"
    }
});
