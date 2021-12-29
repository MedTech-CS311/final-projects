import axios from 'axios';

const apiUrl = "http://localhost:8000/tasks";

export function getTask(){
    return axios.get(apiUrl);
}

export function addTask(task){
    return axios.post(apiUrl,task);
}


export function updateTask(id,task){
    return axios.put(apiUrl + "/" + id,task);
}

export function deleteTask(id){
    return axios.delete(apiUrl + "/" + id);
}