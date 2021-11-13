import axios, {AxiosResponse} from "axios";

const baseUrl = "http://localhost:7542/2.0/"

const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {

    }
})
    // `<div style="background-color: lime; padding: 15px">
	// password recovery link:
	// <a href='http://localhost:3000/#/set-new-password/$token$'>
	// link</a></div>`

type ResponseType =  {
    info: string,
    error: string
}

type setNewPasswordType ={
    password: string
    resetPasswordToken: string
}

type recoveryMessageType = {
    email: string,
        from?: string,
    message: string
}

export const NewPasswordAPI = {
    sendRecoveryToken({email, from, message}:recoveryMessageType) {
        return instance.post<recoveryMessageType, AxiosResponse<ResponseType>>('auth/login', {email, from, message})
    },
    sendNewPassword() {
        return instance.post<setNewPasswordType, AxiosResponse<ResponseType>>(`auth/login`);
    },
}