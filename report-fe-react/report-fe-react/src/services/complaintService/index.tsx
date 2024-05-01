import { AxiosRequestConfig } from "axios"
import { requestBackend } from "../../utils/requests";


export function findAll() {

    const config: AxiosRequestConfig = {
        url: `/complaints/?sort=date,desc`,
        withCredentials: true
    }

    return requestBackend(config)
}



export function findById(id: number) {

    const config: AxiosRequestConfig = {
        url: `/complaints/id/${id}`,
        withCredentials: true
    }

    return requestBackend(config)
}


export function complaintsPreview() {

    const config: AxiosRequestConfig = {
        url: `/complaints/preview/?size=4&sort=date,desc`,
        withCredentials: false
    }

    return requestBackend(config)
}
