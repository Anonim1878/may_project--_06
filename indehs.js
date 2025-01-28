const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', () => {
  // Паролду көрсөтүү же жашыруу
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);

  // Көздүн сүрөтүн өзгөртүү
  togglePassword.setAttribute(
    'name',
    type === 'password' ? 'eye-off-outline' : 'eye-outline'
  );
});
