import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, moveTodo } from '../redux/slice/todoSlice';

function Home() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            const todo = { id: Date.now(), text: newTodo };
            dispatch(addTodo(todo));
            setNewTodo('');
        }
    };
    const moveToCompleted = id => {
        dispatch(moveTodo(id));
    };

    const handleDeleteTodo = id => {
        dispatch(deleteTodo(id));
    }
    const completedTodos = todos.filter(todo => todo.completed);

return (
        <>
            <h1>My Todo List</h1>
                <div className='d-flex justify-content-between'>
                    <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
                     <button onClick={handleAddTodo} className='b1 ms-3' style={{ backgroundColor: '#0099ff', border: '0px', padding: '3px', marginLeft: '5px' }} >Submit</button>
                </div>
                    <ul>
                    {  todos.map(todo => (
                        <li key={todo.id}>
                          <div >
                            <div style={{ float: 'left', backgroundColor: "#99ff99" }} >
                              <input type="checkbox" checked={todo.completed} onChange={() => moveToCompleted(todo.id)} style={{ float: 'left' }}/>
                                <p style={{ width: "700px", float: 'left' }}  >{todo.text}</p>
                                <button style={{ marginTop: '10px', marginLeft: '15px', height: '20px' }} onClick={() => handleDeleteTodo(todo.id)}>Delete</button><br />
                            </div>
                          </div>
                     <br/><br/><br/>
                        </li>  ))
                    }
            <h2>Completed Items</h2>
              </ul>
                <div className='border rounded  mb-3 p-2'>
                    <div className='d-flex icons alighn items center' >
                        <ul>
                            {  completedTodos.map(todo => (
                                <li key={todo.id}>
                                 <div className='mt-4' style={{ float: 'left', backgroundColor: "#ff471a" }} >
                                        <input type="checkbox" checked={todo.completed} onChange={() => moveToCompleted(todo.id)} style={{ float: 'left' }}/>
                                        <p style={{ width: "700px", float: 'left' }}  >{todo.text}</p>
                                        <button style={{ marginTop: '10px', marginLeft: '15px', height: '20px' }} onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                                    </div>
                            <br/><br/><br/>
                            </li> ))
                            }
                        </ul>
                    </div>
                </div>
        </>
    );
}
export default Home;

