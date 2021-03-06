import {instance} from "./index";



export const loginAPI = {
    login({email, password, rememberMe}: LoginPayloadType) {
        return instance.post<RequestLoginType>("/auth/login", {email, password, rememberMe})
    },
    logout() {
        return instance.delete("/auth/me",)
    },
    me() {
        return instance.post("/auth/me").then(res => res.data)
    }

}

//Types

export type LoginPayloadType = {
    email: string
    password: string
    rememberMe: boolean
}
export type RequestLoginType = {
    _id: string
    name: string
    avatar?: string | undefined
    error?: string
    email: string
    password: string
    rememberMe: boolean
    token:string
}




