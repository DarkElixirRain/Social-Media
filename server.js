const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Serve login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'login.html'));
});

// Handle login POST request (placeholder for actual authentication)
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Placeholder for actual authentication logic
  if (username === 'user' && password === 'pass') {
    res.redirect('/index.html'); // Redirect to main page after successful login
  } else {
    res.status(401).send('Invalid username or password');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
