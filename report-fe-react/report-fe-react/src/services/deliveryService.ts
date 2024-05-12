import { AxiosRequestConfig } from "axios"
import { requestBackend } from "../utils/requests";


export function findAll() {

    const config: AxiosRequestConfig = {
        url: `/deliveries/?sort=date,desc`,
        withCredentials: true
    }

    return requestBackend(config)
}



export function findById(id: number) {

    const config: AxiosRequestConfig = {
        url: `/deliveries/id/${id}`,
        withCredentials: true
    }

    return requestBackend(config)
}


export function deliveryPreview() {

    const config: AxiosRequestConfig = {
        url: `/deliveries/preview/?size=4&sort=date,desc`,
        withCredentials: false
    }

    return requestBackend(config)
}