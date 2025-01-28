const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', () => {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  togglePassword.setAttribute(
    'name',
    type === 'password' ? 'eye-off-outline' : 'eye-outline'
  );
});
