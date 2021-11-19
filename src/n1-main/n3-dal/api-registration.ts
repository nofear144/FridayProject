import {instance} from "./index";
import {AxiosResponse} from "axios";

export const apiRegistration = {
    registration({email,password}:RegistrationDataType) {
        return instance.post<RegistrationDataType, AxiosResponse<ResponseType>>
        (`auth/register`, {email,password})
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