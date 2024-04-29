
export type AccessTokenPayloadDTO = {
    exp: number;
    user_name : string;
    "authorities": RoleEnum[];
}

export type RoleEnum = "ROLE_ADMIN" | "ROLE_USER" | "ROLE_VISITOR";