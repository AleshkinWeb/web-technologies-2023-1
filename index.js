function doFeedbackAction(action) {
    const form = document.getElementById('reviewForm');
    const formData = new FormData(form);
    formData.append('action', action);

    fetch('crud.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (action === 'create') {
            // Перезагрузить отзывы
            loadReviews(formData.get('product_id'));
        }
    });
}

function loadReviews(productId) {
    const formData = new FormData();
    formData.append('action', 'read');
    formData.append('product_id', productId);

    fetch('crud.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(reviews => {
        const reviewsDiv = document.getElementById('reviews');
        reviewsDiv.innerHTML = '';
        reviews.forEach(review => {
            reviewsDiv.innerHTML += `
                <div class="review">
                    <p><strong>${review.author}</strong> (оценка: ${review.rating})</p>
                    <p>${review.content}</p>
                    <p><small>${review.created_at}</small></p>
                </div>
            `;
        });
    });
}