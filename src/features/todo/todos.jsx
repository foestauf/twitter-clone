import { useSelector } from 'react-redux';
import { isEmpty, isLoaded, useFirestoreConnect } from 'react-redux-firebase';
import React from 'react';
import TodoItem from './TodoItem';
import NewTodo from './NewTodo';

const todosQuery = {
  collection: 'todos',
  limitTo: 10,
};

function Todos() {
  useFirestoreConnect(() => [todosQuery]);

  const todos = useSelector(({ firestore: { ordered } }) => ordered.todos);

  if (!isLoaded(todos)) {
    return 'Loading';
  }

  if (isEmpty(todos)) {
    return 'Todo List is empty';
  }

  return todos.map(({ id, ...todo }, ind) => <TodoItem key={`${id}-${ind}`} id={id} {...todo} />);
}

export const Home = () => {
  return (
    <div id="home">
      Firestore demo
      <Todos />
      <NewTodo />
    </div>
  );
};

export default Home;
