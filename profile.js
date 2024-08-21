let themeBlack = document.querySelector(".theme #nightLight")

themeBlack.addEventListener('click', changeBackgroundToBlack)

function changeBackgroundToBlack() {
    document.body.classList.toggle("newTheme")
    if(document.body.classList.contains("newTheme")) {
        themeBlack.src = "image/sun.png"
    }else {
        themeBlack.src = "image/moon.png"
    }
}
