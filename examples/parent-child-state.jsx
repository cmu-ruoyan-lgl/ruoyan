import React, { useState } from 'react';

// 父组件
function ParentComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // 定义回调函数，传递给子组件
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  const handleNameChange = (newName) => {
    setName(newName);
  };

  return (
    <div>
      <h2>父组件</h2>
      <p>计数: {count}</p>
      <p>姓名: {name}</p>
      
      {/* 将状态和回调函数作为props传递给子组件 */}
      <ChildComponent 
        count={count}
        name={name}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onNameChange={handleNameChange}
      />
    </div>
  );
}

// 子组件
function ChildComponent({ count, name, onIncrement, onDecrement, onNameChange }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNameChange(inputValue);
    setInputValue('');
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
      <h3>子组件</h3>
      
      {/* 显示从父组件传递的状态 */}
      <p>从父组件接收的计数: {count}</p>
      <p>从父组件接收的姓名: {name}</p>
      
      {/* 通过调用父组件传递的回调函数来改变父组件状态 */}
      <button onClick={onIncrement}>增加计数</button>
      <button onClick={onDecrement}>减少计数</button>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="输入新姓名"
        />
        <button type="submit">更新姓名</button>
      </form>
    </div>
  );
}

export default ParentComponent;
