
export type AccessTokenPayloadDTO = {
    exp: number;
    userName : string;
    "authorities": RoleEnum[];
}

export type RoleEnum = "ROLE_ADMIN" | "ROLE_USER" | "ROLE_VISITOR";