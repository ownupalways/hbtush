document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    const reviewsList = document.getElementById('reviewsList');

    // Load existing reviews
    loadReviews();

    // Handle form submission
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const skill = document.getElementById('skill').value;
        const rating = document.querySelector('input[name="rating"]:checked').value;
        const comment = document.getElementById('comment').value;

        const review = {
            name,
            skill,
            rating: parseInt(rating),
            comment,
            date: new Date().toLocaleDateString()
        };

        saveReview(review);
        reviewForm.reset();
        loadReviews();

        // Show success message
        showNotification('Review submitted successfully!', 'success');
    });

    function saveReview(review) {
        let reviews = JSON.parse(localStorage.getItem('portfolioReviews')) || [];
        reviews.unshift(review); // Add new review to the beginning of the array
        localStorage.setItem('portfolioReviews', JSON.stringify(reviews));
    }

    function loadReviews() {
        const reviews = JSON.parse(localStorage.getItem('portfolioReviews')) || [];
        reviewsList.innerHTML = '';
        reviews.forEach((review, index) => {
            const reviewElement = document.createElement('div');
            reviewElement.className = 'review-item';
            reviewElement.innerHTML = `
                <div class="review-header">
                    <span class="reviewer-name">${review.name}</span>
                    <span class="review-date">${review.date}</span>
                </div>
                <div class="review-skill">Skill: ${review.skill}</div>
                <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                <div class="review-comment">${review.comment}</div>
            `;
            reviewsList.appendChild(reviewElement);

            // Add animation to new reviews
            gsap.from(reviewElement, {
                opacity: 0,
                y: 20,
                duration: 0.5,
                delay: index * 0.1
            });
        });
    }

    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        gsap.to(notification, {
            opacity: 1,
            y: 20,
            duration: 0.5,
            onComplete: () => {
                setTimeout(() => {
                    gsap.to(notification, {
                        opacity: 0,
                        y: -20,
                        duration: 0.5,
                        onComplete: () => {
                            notification.remove();
                        }
                    });
                }, 3000);
            }
        });
    }

    // Add hover effect to review items
    reviewsList.addEventListener('mouseover', (e) => {
        if (e.target.closest('.review-item')) {
            gsap.to(e.target.closest('.review-item'), {
                scale: 1.02,
                duration: 0.2
            });
        }
    });

    reviewsList.addEventListener('mouseout', (e) => {
        if (e.target.closest('.review-item')) {
            gsap.to(e.target.closest('.review-item'), {
                scale: 1,
                duration: 0.2
            });
        }
    });
});