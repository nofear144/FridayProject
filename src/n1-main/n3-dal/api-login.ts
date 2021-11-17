import axios from "axios";


const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0",
    withCredentials: true,
    headers: {}
})


export const loginAPI = {
    login({email, password, rememberMe}:LoginType) {
        return instance.post<LoginType>("/auth/login", {email, password, rememberMe})
    },
    logout () {
        return instance.delete("/auth/me")
    },
    me(){
        return  instance.post("/auth/me")
    }

}

//Types
export type LoginType = {
    email: string
    password: string
    rememberMe: boolean
}




