const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    validationModal(
      'Darn!! Failed to log out',
      'Why not take more time to explore your favorite campsites!!'
    );
    return;
  }
};

document.querySelector('#logout').addEventListener('click', logout);
