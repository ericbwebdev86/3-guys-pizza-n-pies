async function reviewHandler(event) {
    event.preventDefault();
    const review_text = document.querySelector('input[id="reviewID"]').value.trim();
    
    if(review_text) {
        const response = await fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify({ 
                review_text
             }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}
document.querySelector('.review-form').addEventListener('submit', reviewHandler);