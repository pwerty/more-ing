export interface User {
  id: number;
  username: string;
  email: string;
}

export const getUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  const userData = localStorage.getItem('user');
  return userData ? JSON.parse(userData) : null;
};

export const setUser = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const removeUser = () => {
  localStorage.removeItem('user');
};