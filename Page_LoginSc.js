document.getElementById('loginForm').addEventListener('submit', function(event) {

  event.preventDefault();

  const username = document.getElementById('username').value;

  const password = document.getElementById('password').value;

  if (username === 'admin' && password === 'password') {

    document.getElementById('message').innerText = window.location.assign("Digital_Clock.html");

  } else {

    document.getElementById('message').innerText = 'Invalid credentials. Please try again.';

  }
});

