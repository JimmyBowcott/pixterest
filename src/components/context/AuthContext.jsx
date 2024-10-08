import { createContext, useState, useEffect } from 'react';
import apiClient from '../../apiClient';

export const AuthContext = createContext();

// AuthContext provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const dbUpdateUserData = async (newUserData) => {
    try {
        await apiClient.put(`/api/user`, newUserData, {
            headers: {
                'Content-Type': 'application/json',
            },
    });
        localStorage.setItem('user', JSON.stringify(newUserData));
    } catch (err) {
        console.log('Error updating user data: ', err);
    }   
  }

  const savePost = async (post) => {
    try {
        const newUserData = {...user, savedPosts: [...user.savedPosts, post]};
        setUser(newUserData);
        await dbUpdateUserData(newUserData);
    } catch (err) {
        console.log('Error saving post: ', err);
    }   
  }

  const removePost = async (post) => {
    try {
        const newUserData = {...user, savedPosts: user.savedPosts.filter(p => p.link !== post.link)};
        await dbUpdateUserData(newUserData);
        setUser(newUserData);
    } catch (err) {
        console.log('Error un-saving post: ', err);
    }   
  }

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, savePost, removePost, dbUpdateUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
