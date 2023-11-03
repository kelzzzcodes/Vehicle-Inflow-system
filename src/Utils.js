export const authenticateUser = (username, password) => {
    const Email ='user@example.com';
    const Password = 'password';
  if (username === `${Email}` && password === `${Password}`) {
    return true;
  }
  return false;
};