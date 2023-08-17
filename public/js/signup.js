// sign up handler
const theSignupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const state = document.querySelector('#state').value.trim();
  console.log(state);
  if (username && email && password && state) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password, state }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/'); 
    } else {
      alert('Sign up falied, please try again.'); 
    }
  }
};

const signupForm = document.querySelector('#signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', theSignupFormHandler);
};