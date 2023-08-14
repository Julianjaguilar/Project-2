// Logout function to send request to log out the user
const techLogout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/'); 
  } else {
    alert('Failed to log out.'); 
  }
};

// Event listener to the logout button
const chessLogoutButton = document.querySelector('#the-tech-logout');
if (chessLogoutButton) {
  chessLogoutButton.addEventListener('click', techLogout);
}