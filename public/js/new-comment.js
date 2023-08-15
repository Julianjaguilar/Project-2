const newTechCommentFormHandler = async (event) => {
  event.preventDefault();

  const post_id = parseInt(window.location.pathname.split('/').pop());

  const content = document.querySelector('#content-new-comment').value.trim();

  if (content) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ comment_text: content, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.reload(); 
    } else {
      console.log('Response status:', response.status);
      console.log('Response text:', await response.text());
      alert('comment Failed to be created!!'); 
    }
  }
};




// Event listeners

const newChessCommentForm = document.querySelector('.new-comment-form');
if (newChessCommentForm) {
  newChessCommentForm.addEventListener('submit', newTechCommentFormHandler);
}