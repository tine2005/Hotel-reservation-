// Tabs
function showForm(form) {
  document.getElementById('loginForm').style.display = form === 'login' ? 'flex' : 'none';
  document.getElementById('registerForm').style.display = form === 'register' ? 'flex' : 'none';
}

// Register
document.getElementById('registerForm').addEventListener('submit', function(e){
  e.preventDefault();
  let email = document.getElementById('regEmail').value;
  let password = document.getElementById('regPassword').value;

  if(localStorage.getItem(email)) {
    document.getElementById('regError').innerText = 'Email already registered.';
    return;
  }

  localStorage.setItem(email, password);
  alert('Registration successful! Redirecting to Home...');
  window.location.href = "home.html";
});

// Login
document.getElementById('loginForm').addEventListener('submit', function(e){
  e.preventDefault();
  let email = document.getElementById('loginEmail').value;
  let password = document.getElementById('loginPassword').value;

  if(localStorage.getItem(email) === password){
    alert('Login successful! Redirecting to Home...');
    window.location.href = "home.html";
  } else {
    document.getElementById('loginError').innerText = 'Invalid email or password.';
  }
});
