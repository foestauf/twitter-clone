import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    { name: 'Wash the car', completed: false },
    { name: 'Wash the clothes', completed: false },
  ],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    removeTodo(state, action) {
      state.splice(action.payload.index, 1);
    },
    toggleTodo(state, action) {
      state.completed = !state.completed;
      console.log(action);
    },
  },
});

export default todosSlice;
