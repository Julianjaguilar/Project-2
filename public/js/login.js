// handler function for login form
const loginFormHandler = async (event) => {
  event.preventDefault();
 
  // get and trim username and passwords
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {      
      // Send a POST request to the login endpoint with the input values as JSON data
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    
    // If the request was successful, load homepage
    if (response.ok) {
      document.location.replace('/'); 
    } else {
          
      alert('Failed to log in.'); 
    }
  }
};


// Event listener for the login form
const loginForm = document.querySelector('.event-login-form');
if (loginForm) {
  loginForm.addEventListener('submit', loginFormHandler);
}