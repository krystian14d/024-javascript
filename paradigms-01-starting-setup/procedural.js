const form = document.getElementById('user-input');

function signupHandler(event) {
  event.preventDefault();
  const userNameInput = document.getElementById('username');
  const enteredUsername = userNameInput.value;

  const passwordInput = document.getElementById('password');
  const enteredPassword = passwordInput.value;

  if (enteredUsername.trim().length === 0) {
    alert('Invalid input username empty');
    return;
  }
  if (enteredUsername.trim().length <= 5) {
    alert('Invalid input password too short');
    return;
  }

  const user = {
    userName: enteredUsername,
    password: enteredPassword
  };

  console.log(user);
  console.log('Hi, i am ' + user.userName);
}

form.addEventListener('submit', signupHandler);
