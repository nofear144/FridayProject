import axios, {AxiosResponse} from "axios";


const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0",
    withCredentials: true,
    headers: {}
})

export const apiRegistration = {
    registration(data: RegistrationDataType) {
        return instance.post<RegistrationDataType, AxiosResponse<ResponseType>>
        (`auth/register`, data)
    }
}

export type RegistrationDataType = {
    email: string
    password: string
}
export type ResponseType = {
    error: string
    isEmailValid: boolean
    isPassValid: boolean
    passwordRegExp: string
}