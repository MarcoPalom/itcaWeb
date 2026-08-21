import React, { createContext, useContext, useState } from 'react';

interface ScrollLockContextType {
  lockScroll: boolean;
  setLockScroll: (value: boolean) => void;
}

const ScrollLockContext = createContext<ScrollLockContextType | undefined>(undefined);

export const ScrollLockProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lockScroll, setLockScroll] = useState(false);
  return (
    <ScrollLockContext.Provider value={{ lockScroll, setLockScroll }}>
      {children}
    </ScrollLockContext.Provider>
  );
};

export function useScrollLock() {
  const context = useContext(ScrollLockContext);
  if (!context) {
    throw new Error('useScrollLock must be used within a ScrollLockProvider');
  }
  return context;
} 