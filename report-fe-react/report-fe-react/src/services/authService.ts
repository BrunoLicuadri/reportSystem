import QueryString from "qs";
import { CredentialsDTO } from "../models/auth";
import { CLIENT_ID, CLIENT_SECRET } from "../utils/system";
import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import * as accessTokenRepository from '../localStorage/accessTokenRepository';
import jwtDecode from "jwt-decode";
import { AccessTokenPayloadDTO, RoleEnum } from "./auth";



export function loginRequest(loginData: CredentialsDTO) {

    const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + window.btoa(CLIENT_ID + ":" + CLIENT_SECRET)
    }

    const requestBody = QueryString.stringify({ ...loginData, grant_type: "password" });


    const config: AxiosRequestConfig = {
        method: "POST",
        url: "/oauth/token",
        data: requestBody,
        headers
    }

    return requestBackend(config)
}


export function logout() {
    accessTokenRepository.removeToken();
}


export function saveAccessToken(token: string) {
    accessTokenRepository.save(token);
}


export function getAccessToken() {
    return accessTokenRepository.get();
}


export function getAccessTokenPayload(): AccessTokenPayloadDTO | undefined {
    try {
        const token = accessTokenRepository.get();
        return token == null ?
            undefined
            : (jwtDecode(token) as AccessTokenPayloadDTO);
    }
    catch(error){
        return undefined;
    }

}

export function isAuthenticated(){
    const tokenPayload = getAccessTokenPayload();
    return tokenPayload && tokenPayload.exp * 1000 > Date.now() ? true : false;
}


export function hasAnyRoles (roles: RoleEnum[]): boolean {
    if (roles.length === 0){
        return true;
    }

    const tokenPayload = getAccessTokenPayload();

    if ( tokenPayload !== undefined){
        for ( let i=0; i < roles.length; i++){
            if(tokenPayload.authorities.includes(roles[i])){
                return true;
            }
        }
    }
    
    return false;
}


