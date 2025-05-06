
const { validateEmail, handleSubmit } = require('./signup-form');

describe('Signup Form', () => {
  describe('validateEmail', () => {
    it('should return true for valid email', () => {
      expect(validateEmail('test@example.com')).toBe(true);
    });

    it('should return false for invalid email', () => {
      expect(validateEmail('test')).toBe(false);
      expect(validateEmail('test@example')).toBe(false);
      expect(validateEmail('test.com')).toBe(false);
    });
  });

  describe('handleSubmit', () => {
    it('should call callback with error for invalid email', (done) => {
      handleSubmit('invalid email', 'password', (error) => {
        expect(error).toBe('Invalid email');
        done();
      });
    });

    it('should call callback with success for valid data', (done) => {
      handleSubmit('test@example.com', 'password', (error, data) => {
        expect(error).toBeNull();
        expect(data.success).toBe(true);
        done();
      });
    });
  });
});