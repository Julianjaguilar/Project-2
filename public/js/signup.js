// This is the signup request
const thetechSignupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/'); 
      } else {
        alert('Sign up Failed Please try again with valide email and password.'); 
      }
    }
  };
  
  
  // Event listeners
  const chessSignupForm = document.querySelector('#signup-form');
  if (chessSignupForm) {
    chessSignupForm.addEventListener('submit', thetechSignupFormHandler);
  }