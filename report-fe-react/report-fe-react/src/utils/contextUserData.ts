import { createContext } from "react";
import { UserDTO } from "../models/user";


type ContextUserType = {
    contextUserData : UserDTO | undefined;
    setcontextUserData : (userData: UserDTO | undefined) => void;
}

export const ContextUser = createContext<ContextUserType>( {
    contextUserData: undefined,
    setcontextUserData: ()=>{}
})