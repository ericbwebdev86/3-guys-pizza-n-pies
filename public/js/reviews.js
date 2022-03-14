async function commentHandler(event) {
    event.preventDefault();
    const comment_text = document.querySelector('input[name="commentID"]').value.trim();
    
    if(comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ 
                comment_text
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
document.querySelector('.comment-form').addEventListener('submit', commentHandler);