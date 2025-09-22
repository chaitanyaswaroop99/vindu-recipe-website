// Simple user database using localStorage
// In a real app, this would be handled by a backend API

const USERS_KEY = 'vindu_users';

// Get all registered users
export const getUsers = () => {
  try {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error('Error getting users:', error);
    return [];
  }
};

// Save all users
export const saveUsers = (users) => {
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (error) {
    console.error('Error saving users:', error);
  }
};

// Register a new user
export const registerUser = (userData) => {
  const users = getUsers();
  
  // Check if user already exists
  const existingUser = users.find(user => user.email === userData.email);
  if (existingUser) {
    throw new Error('User with this email already exists');
  }
  
  // Create new user
  const newUser = {
    id: Date.now().toString(),
    name: userData.name,
    email: userData.email,
    password: userData.password, // In real app, this should be hashed
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  saveUsers(users);
  
  return newUser;
};

// Validate user login
export const validateLogin = (email, password) => {
  const users = getUsers();
  const user = users.find(u => u.email === email);
  
  if (!user) {
    throw new Error('No account found with this email. Please sign up first.');
  }
  
  if (user.password !== password) {
    throw new Error('Incorrect password');
  }
  
  // Return user data without password
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

// Check if user exists
export const userExists = (email) => {
  const users = getUsers();
  return users.some(user => user.email === email);
};
