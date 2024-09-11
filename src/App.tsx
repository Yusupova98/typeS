import { useEffect, useRef, useState } from 'react'
import Item from './item.tsx'
import { List } from './types.ts'
import './App.css'

function App() {
  const initialTodos: List[] = [
    {id: 1, title: 'Медитация'}, 
    {id: 2, title: 'Принять ванную'}, 
    {id: 3, title: 'Поужинать китайской едой'},
    {id: 4, title:'Сходить на прогулку'}
  ];

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos') ?? JSON.stringify(initialTodos)));
  const inputRef = useRef<any>(null);

  const addTodoHandler = () => {
    setTodos([...todos, inputRef.current.value])
  };
  
  function deleteTodo(id: number) {
    const newTodos = todos.filter((el: List) => el.id !== id);
    setTodos(newTodos);
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);  

  return (
    <>
      <div>
      {todos.map((el: List) => {
          return <div key={el.id}>
                  <Item  el={el} deleteTodos={deleteTodo}/>
                </div>
          })}

      <form>
          <input ref={inputRef} type="text" placeholder='Ввести задачу'/>
          <button onClick={addTodoHandler} type='submit'>          
            Добавить
          </button>
      </form>     
        {todos.length >= 4 && <div>Всего задач: {todos.length}</div>}
      </div>
    </>
  )
}

export default App;

