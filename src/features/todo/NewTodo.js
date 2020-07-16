import React, { useState } from 'react';
import { useFirestore } from 'react-redux-firebase';
import { Button } from '@material-ui/core';

function NewTodo() {
  const [inputVal, changeInput] = useState('');
  const firestore = useFirestore();

  function resetInput() {
    changeInput('');
  }
  function onInputChange(e) {
    return changeInput(e && e.target && e.target.value);
  }

  function addTodo() {
    return firestore.collection('todos').add({ text: inputVal || 'sample', done: false });
  }

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h4>New Todo</h4>
      <input value={inputVal} onChange={onInputChange} />
      <Button onClick={addTodo}>Add</Button>
      <Button onClick={resetInput}>Cancel</Button>
    </div>
  );
}

export default NewTodo;
