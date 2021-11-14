import axios, {AxiosResponse} from "axios";

const baseUrl = "https://neko-back.herokuapp.com/2.0"

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {'Access-Control-Allow-Origin': 'https://neko-back.herokuapp.com/2.0',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'}
})


type ResponseType = {
    info: string,
    error: string
}

export type setNewPasswordType = {
    password: string
    resetPasswordToken: string
}

export type recoveryMessageType = {
    email: string,
    from?: string,
    message: string
}

export const NewPasswordAPI = {
    sendRecoveryInstructions(messageData: recoveryMessageType) {
        console.log(messageData)
        return instance.post<recoveryMessageType, AxiosResponse<ResponseType>>('auth/login', messageData)
    },
    sendNewPasswordWithToken(newPasswordData: setNewPasswordType) {
        console.log(newPasswordData)
        return instance.post<setNewPasswordType, AxiosResponse<ResponseType>>(`auth/login`, newPasswordData);
    },
}