

async function login(username, password) {
    const response = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
      return { success: true };
    } else {
      return { success: false, message: data.message };
    }
  }
  
  module.exports = login;