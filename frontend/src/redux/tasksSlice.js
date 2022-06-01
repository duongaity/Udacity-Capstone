import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import TodoService from "../services/TodoService";

export const fetchTodoList = createAsyncThunk('todo/fetchList', async () => {
    const response = await TodoService.findAll();
    return response.data
})    
    
export const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        todos: [], 
        loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    },
    reducers:{
        addTask: (state, action)=>{
            const newTask = {
                id: new Date(),
                name: action.payload.task
            }
            state.push(newTask);
        },
        deleteTask: (state, action)=>{
            return state.filter((item) => item.id !== action.payload.id);
        }
    },
    // extraReducers(builder) {
        // builder
        //     .addCase(fetchTodoList.pending, (state, action) => {
        //         state.status = 'loading'
        //     })
        //     .addCase(fetchTodoList.fulfilled, (state, action) => {
        //         state.status = 'succeeded'
        //         state.posts = state.posts.concat(action.payload)
        //     })
        //     .addCase(fetchTodoList.rejected, (state, action) => {
        //         state.status = 'failed'
        //         state.error = action.error.message
        //     })
    // }
});

export const {addTask, deleteTask} = tasksSlice.actions;

export default tasksSlice.reducer;