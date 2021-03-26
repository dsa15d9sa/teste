/* function showPassword(){
  const eye = document.getElementById('eye');
  const eyeSlash = document.getElementById('eye-slash');
  const fieldPassword = document.getElementById('fieldPassword')

  if (eye.style.display==='none') {
    eye.style.display='block';
    eye.styleSlash.display='none';
    fieldPassword.type='text';

  } else {
    eye.style.display='none';
    eye.styleSlash.display='block';
    fieldPassword.type='password';
  }
};

document.getElementById('btn-login').addEventListener('click', funcion(e){
  e.preventDefault();
  alert('Logado!');
}); */


function showPassword() {
const eye = document.getElementById('eye');
const eyeSlash = document.getElementById('eye-slash');
const fieldPassword = document.getElementById('field-password');

if(eye.style.display === 'none') {
  eye.style.display = 'block';
  eyeSlash.style.display = 'none';
  fieldPassword.type = 'text';
} else {
  eye.style.display = 'none';
  eyeSlash.style.display = 'block';
  fieldPassword.type = 'password';
}
};

document.getElementById('btn-login').addEventListener('click', function(e) {
e.preventDefault();
alert('Logado!');
});
