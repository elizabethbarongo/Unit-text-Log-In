
const login = require('../login');

// Mock the fetch function
global.fetch = jest.fn();

describe('login', () => {
  beforeEach(() => {
    fetch.mockClear();
    localStorage.clear();
  });

  it('should log in successfully with valid credentials', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ token: 'mock-token' }),
    });

    const result = await login('testuser', 'password123');
    expect(result.success).toBe(true);
    expect(localStorage.getItem('token')).toBe('mock-token');
  });

  it('should return an error with invalid credentials', async () =>{
    fetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ message: 'Invalid credentials' }),
    });

    const result = await login('testuser', 'wrongpassword');
    expect(result.success).toBe(false);
    expect(result.message).toBe('Invalid credentials');
    expect(localStorage.getItem('token')).toBeNull();
  });

  it('should handle network errors', async () => {
     fetch.mockRejectedValueOnce(new Error('Network error'));

     const result = await login('testuser', 'password123');
     expect(result.success).toBe(false);
     expect(result.message).toBe('Network error');
  });
});