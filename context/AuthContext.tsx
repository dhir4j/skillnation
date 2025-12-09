'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    try {
      // Check localStorage for stored user
      if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('demo_user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      }
    } catch (error) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('demo_user');
      }
    } finally {
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    // Demo mode: Accept any credentials
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const demoUser: User = {
      id: Date.now(),
      name: email.split('@')[0], // Use part before @ as name
      email: email,
      created_at: new Date().toISOString(),
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem('demo_user', JSON.stringify(demoUser));
    }
    setUser(demoUser);
  };

  const register = async (name: string, email: string, password: string) => {
    // Demo mode: Accept any credentials
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const demoUser: User = {
      id: Date.now(),
      name: name,
      email: email,
      created_at: new Date().toISOString(),
    };

    if (typeof window !== 'undefined') {
      localStorage.setItem('demo_user', JSON.stringify(demoUser));
    }
    setUser(demoUser);
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('demo_user');
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
