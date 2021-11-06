import axios from "axios";


const instance = axios.create({
    baseURL: '',
    withCredentials: true,
    headers: {
        'API-KEY': '395bb44f-c5cd-48fe-9fde-631834ccd660'
    }
})