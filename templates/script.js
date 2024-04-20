const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const username = document.getElementById('username');
const date = document.getElementById('date');
const gender = document.getElementById('gender');
const mobilenumber = document.getElementById('mobilenumber');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');

form.addEventListener('submit', (e) => {
  e.preventDefault(); 
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error'); 
  inputControl.classList.remove('success'); 
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = ''; 
  inputControl.classList.add('success'); 
  inputControl.classList.remove('error'); 
};

const validateInputs = () => {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const usernameValue = username.value.trim();
  const dateValue = date.value.trim();
  const genderValue = gender.value.trim();
  const mobilenumberValue = mobilenumber.value.trim();
  const passwordValue = password.value.trim();
  const confirmpasswordValue = confirmpassword.value.trim();

  
  if (firstnameValue === '') {
    setError(firstname, 'Firstname is required');
  } else {
    setSuccess(firstname);
  }

  
  if (lastnameValue === '') {
    setError(lastname, 'Lastname is required');
  } else {
    setSuccess(lastname);
  }

  
  if (usernameValue === '') {
    setError(username, 'Username is required');
  } else {
    setSuccess(username);
  }

  
  if (dateValue === '') {
    setError(date, 'Date of birth is required');
  } else {
    setSuccess(date);
  }

  
  if (genderValue === '') {
    setError(gender, 'Gender is required');
  } else {
    setSuccess(gender);
  }

  
  if (mobilenumberValue === '') {
    setError(mobilenumber, 'Mobile number is required');
  } else {
    setSuccess(mobilenumber);
  }

  
  if (passwordValue === '') {
    setError(password, 'Password is required');
  } else if (passwordValue.length < 8) {
    setError(password, 'Password must be at least 8 characters long');
  } else {
    setSuccess(password);
  }

  
  if (confirmpasswordValue === '') {
    setError(confirmpassword, 'Please confirm your password');
  } else if (confirmpasswordValue !== passwordValue) {
    setError(confirmpassword, "Passwords don't match");
  } else {
    setSuccess(confirmpassword);
  }


};
