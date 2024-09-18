document.addEventListener('touchstart', e => {
    e.preventDefault()
    ;[...e.changedTouches].forEach(touch => {
        document.top = `${touch.pageY}px`
        document.top = `${touch.pageX}px`
        document.id = touch.identifier
    });
})

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
// let mainDoc = document.getElementsByTagName('main')[0]
// Apply the saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    // mainDoc.style.scale = '1'
    const savedTheme = localStorage.getItem('theme');
    updatedTheme(savedTheme);

    if(document.body.classList.contains("newTheme")) {
        themeBlack.src = "image/sun.png"
    }else {
        themeBlack.src = "image/moon.png"
    }
});

// IMAGE ICON DISPLAY:NONE ON MENU CLICK

let menuIcon = document.getElementsByClassName('checkBtn')[0]
let imageIcon = document.getElementsByClassName('image2')[0]

menuIcon.addEventListener('click', imageSwitch)

function imageSwitch() {
    imageIcon.classList.toggle('switchImage')
}
