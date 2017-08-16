export function signIn(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'user' && password === 'user') {
        resolve({
          username: 'user'
        });
      } else {
        reject({
          'username': 'Username is invalid!',
          'password': 'Password is invalid'
        });
      }
    }, 2000);
  });
}