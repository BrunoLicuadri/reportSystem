import { AxiosRequestConfig } from "axios"
import { requestBackend } from "../utils/requests";
import { complaintDTO } from "../models/complaint";


export function findAll(page: number, name: string, size = 12, sort = "date,desc") {

    const config: AxiosRequestConfig = {
        method: "GET",
        withCredentials: true,
        url: "/complaints",
        params: {
            page,
            name,
            size,
            sort
        }
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


export function deleteById(id: number) {

    const config: AxiosRequestConfig = {
        method: "DELETE",
        url: `/complaints/${id}`,
        withCredentials: true,
    }

    return requestBackend(config);
}


export function updateRequest(obj: complaintDTO) {

    const config: AxiosRequestConfig = {
        method: "PUT",
        url: `/complaints/${obj.id}`,
        withCredentials: true,
        data: obj
    }

    return requestBackend(config);
}


export function insertRequest(obj: complaintDTO) {

    const config: AxiosRequestConfig = {
        method: "POST",
        url: "/complaints",
        withCredentials: true,
        data: obj
    }

    return requestBackend(config);
}