import { Navigate } from "react-router-dom";
import { hasAnyRoles, isAuthenticated } from "../../services/authService";
import { RoleEnum } from "../../services/auth";

type Props ={
    children : JSX.Element;
    roles?: RoleEnum[];
}

export function PrivateRoute( {children, roles=[]}: Props){
    if (!isAuthenticated || !hasAnyRoles(roles)) {
        return <Navigate to="/tralala" />
    }
    return children;
}