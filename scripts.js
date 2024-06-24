document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Placeholder for actual authentication logic
  if (username === 'user' && password === 'pass') {
    alert('Login successful!');
    window.location.href = 'index.html'; // Redirect to main page after login
  } else {
    alert('Invalid username or password');
  }
});

function submitPost() {
  // Placeholder function for posting logic
  const postContent = document.getElementById('postContent').value;
  console.log('Posting:', postContent);
  // Implement actual posting logic as needed
}
