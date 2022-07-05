import {AddTask , DeleteTask, FilterTask , DoneTask ,EditTask,SaveTask  } from './type'

export const addTask =(task) =>{
    return {
        type: AddTask,
        payload: task
    }
}


export const deleteTask =(id) => {
    return {
        type : DeleteTask,
        payload : id
    }
}

export const filterTask = (X) => {
    return {
        type : FilterTask,
        payload : X
    }
}

export const doneTask = (id) => {
    return {
        type : DoneTask,
        payload : id
    }
}
export const editTask = (el) => {
    return {
        type : EditTask,
        payload : el
    }
}
export const saveTask = (x) => {
    return {
        type : SaveTask,
        payload : x
    }
}


