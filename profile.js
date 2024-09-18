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

// Review js

document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = event.target.name.value;
    const review = event.target.review.value;

    // Create new review element
    const newReview = document.createElement("li");
    newReview.textContent = `${name}: ${review}`;

    // Append to the review list
    document.getElementById("reviews").appendChild(newReview);

    // Optionally, save the review to localStorage for persistence
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    savedReviews.push({ name, review });
    localStorage.setItem("reviews", JSON.stringify(savedReviews));

    // Clear the form
    event.target.reset();
});

// Load reviews from localStorage when the page loads
document.addEventListener("DOMContentLoaded", function() {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    savedReviews.forEach(review => {
        const newReview = document.createElement("li");
        newReview.textContent = `${review.name}: ${review.review}`;
        document.getElementById("reviews").appendChild(newReview);
    });
});

