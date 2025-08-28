import React, { createContext, useContext, useState } from 'react';

// 创建Context
const AppContext = createContext();

// Context Provider组件
function AppProvider({ children }) {
  const [user, setUser] = useState({ name: '', age: 0 });
  const [theme, setTheme] = useState('light');

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const value = {
    user,
    theme,
    updateUser,
    toggleTheme
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// 自定义Hook来使用Context
function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
}

// 父组件
function ParentComponent() {
  return (
    <AppProvider>
      <div>
        <h2>父组件</h2>
        <ChildComponent />
        <GrandChildComponent />
      </div>
    </AppProvider>
  );
}

// 子组件
function ChildComponent() {
  const { user, updateUser } = useAppContext();

  const handleNameChange = (e) => {
    updateUser({ ...user, name: e.target.value });
  };

  const handleAgeChange = (e) => {
    updateUser({ ...user, age: parseInt(e.target.value) || 0 });
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
      <h3>子组件</h3>
      <p>当前用户: {user.name} ({user.age}岁)</p>
      
      <div>
        <label>姓名: </label>
        <input 
          type="text" 
          value={user.name} 
          onChange={handleNameChange}
        />
      </div>
      
      <div>
        <label>年龄: </label>
        <input 
          type="number" 
          value={user.age} 
          onChange={handleAgeChange}
        />
      </div>
    </div>
  );
}

// 孙组件（深层子组件）
function GrandChildComponent() {
  const { theme, toggleTheme } = useAppContext();

  return (
    <div style={{ 
      border: '1px solid #ccc', 
      padding: '20px', 
      margin: '10px',
      backgroundColor: theme === 'dark' ? '#333' : '#fff',
      color: theme === 'dark' ? '#fff' : '#333'
    }}>
      <h3>孙组件</h3>
      <p>当前主题: {theme}</p>
      <button onClick={toggleTheme}>
        切换主题
      </button>
    </div>
  );
}

export default ParentComponent;
