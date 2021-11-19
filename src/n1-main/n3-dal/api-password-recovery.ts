import axios, {AxiosResponse} from "axios";

const baseUrl = "https://neko-back.herokuapp.com/2.0"

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {}
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
        return instance.post<recoveryMessageType, AxiosResponse<ResponseType>>('auth/forgot', messageData)
    },
    sendNewPasswordWithToken(newPasswordData: setNewPasswordType) {
        return instance.post<setNewPasswordType, AxiosResponse<ResponseType>>(`auth/set-new-password`, newPasswordData);
    },
}