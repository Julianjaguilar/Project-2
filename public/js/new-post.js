// create new post

const newPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title-new-post').value.trim();
  const venue = document.querySelector('#venue-new-post').value.trim();
  const event_date = document.querySelector('#date-new-post').value.trim();
  const event_time = document.querySelector('#time-new-post').value.trim();
  const event_state = document.querySelector('#state-new-post').value.trim();
  const details = document.querySelector('#details-new-post').value.trim();

  if (title && details && venue && event_date && event_time && event_state) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, details, venue, event_date, event_time, event_state }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard'); 
    } else {
      alert('New post failed to be created.'); 
    }
  }
};


const newPostForm = document.querySelector('.new-post-form');
if (newPostForm) {
  newPostForm.addEventListener('submit', newPostFormHandler);
};