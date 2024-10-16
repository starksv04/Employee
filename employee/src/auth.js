export const login = (credentials, navigate) => {
    const { username, password, role } = credentials;
  
    // Basic authentication logic (can be replaced with real API validation)
    const isAuthenticated = (username === 'admin' && password === 'password' && role === 'admin') ||
                            (username === 'employee' && password === 'password' && role === 'employee');
  
    if (isAuthenticated && role === 'admin') {
      navigate('/admin');
    } else if (isAuthenticated && role === 'employee') {
      navigate('/employee');
    }
  
    return isAuthenticated;
  };
  