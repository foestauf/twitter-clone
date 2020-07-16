import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestore } from 'react-redux-firebase';
import { Button } from '@material-ui/core';

function TodoItem({ id }) {
  const todo = useSelector(({ firestore: { data } }) => data.todos && data.todos[id]);
  const firestore = useFirestore();

  function toggleDone() {
    firestore.update(`todos/${id}`, { done: !todo.done });
  }

  function deleteTodo() {
    return firestore.delete(`todos/${id}`);
  }

  return (
    <li className="Todo">
      <input className="Todo-Input" type="checkbox" checked={todo.done} onChange={toggleDone} />
      {todo.text || todo.name}
      <Button className="Todo-Button" onClick={deleteTodo}>
        Delete
      </Button>
    </li>
  );
}

export default TodoItem;
