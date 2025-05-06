

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function handleSubmit(email, password, callback) {
    if (!validateEmail(email)) {
      callback('Invalid email');
      return;
    }
   
    setTimeout(() => {
      callback(null, { success: true });
    }, 500);
  }
  
  module.exports = { validateEmail, handleSubmit };