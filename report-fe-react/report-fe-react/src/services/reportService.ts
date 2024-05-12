import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import { reportDTO } from "../models/report";



export function findAll(page: number, name: string, size = 12, sort = "date,desc") {

    const config: AxiosRequestConfig = {
        method: "GET",
        withCredentials: true,
        url: "/report",
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
        url: `/report/id/${id}`,
        withCredentials: true
    }

    return requestBackend(config)
}


export function reportPreview() {

    const config: AxiosRequestConfig = {
        url: `/report/preview/?size=4&sort=date,desc`,
        withCredentials: false
    }

    return requestBackend(config)
}


export function deleteById(id: number) {

    const config: AxiosRequestConfig = {
        method: "DELETE",
        url: `/report/${id}`,
        withCredentials: true,
    }

    return requestBackend(config);
}


export function updateRequest(obj: reportDTO) {

    const config: AxiosRequestConfig = {
        method: "PUT",
        url: `/report/${obj.id}`,
        withCredentials: true,
        data: obj
    }

    return requestBackend(config);
}


export function insertRequest(obj: reportDTO) {

    const config: AxiosRequestConfig = {
        method: "POST",
        url: "/report",
        withCredentials: true,
        data: obj
    }

    return requestBackend(config);
}