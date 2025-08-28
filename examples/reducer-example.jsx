import React, { useReducer } from 'react';

// 定义初始状态
const initialState = {
  todos: [],
  filter: 'all'
};

// 定义reducer函数
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, {
          id: Date.now(),
          text: action.payload,
          completed: false
        }]
      };
    
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
    
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      };
    
    default:
      return state;
  }
}

// 父组件
function ParentComponent() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const filteredTodos = state.todos.filter(todo => {
    if (state.filter === 'active') return !todo.completed;
    if (state.filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div>
      <h2>待办事项应用</h2>
      <p>总任务数: {state.todos.length}</p>
      <p>已完成: {state.todos.filter(todo => todo.completed).length}</p>
      
      {/* 将dispatch传递给子组件 */}
      <TodoForm dispatch={dispatch} />
      <TodoFilter filter={state.filter} dispatch={dispatch} />
      <TodoList todos={filteredTodos} dispatch={dispatch} />
    </div>
  );
}

// 子组件1：添加待办事项
function TodoForm({ dispatch }) {
  const [inputValue, setInputValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch({ type: 'ADD_TODO', payload: inputValue.trim() });
      setInputValue('');
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
      <h3>添加新任务</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="输入新任务..."
        />
        <button type="submit">添加</button>
      </form>
    </div>
  );
}

// 子组件2：过滤器
function TodoFilter({ filter, dispatch }) {
  const filters = ['all', 'active', 'completed'];

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
      <h3>过滤器</h3>
      {filters.map(filterType => (
        <button
          key={filterType}
          onClick={() => dispatch({ type: 'SET_FILTER', payload: filterType })}
          style={{
            margin: '5px',
            backgroundColor: filter === filterType ? '#007bff' : '#f8f9fa',
            color: filter === filterType ? 'white' : 'black'
          }}
        >
          {filterType === 'all' ? '全部' : 
           filterType === 'active' ? '进行中' : '已完成'}
        </button>
      ))}
    </div>
  );
}

// 子组件3：待办事项列表
function TodoList({ todos, dispatch }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '10px' }}>
      <h3>任务列表</h3>
      {todos.length === 0 ? (
        <p>暂无任务</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id} style={{ 
              textDecoration: todo.completed ? 'line-through' : 'none',
              margin: '10px 0'
            }}>
              <span onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}>
                {todo.text}
              </span>
              <button 
                onClick={() => dispatch({ type: 'DELETE_TODO', payload: todo.id })}
                style={{ marginLeft: '10px', color: 'red' }}
              >
                删除
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ParentComponent;
