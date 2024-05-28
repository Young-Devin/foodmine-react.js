import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function AuthRoute( { children }) {
    const location = useLocation();
    const { user } = useAuth();
    return (
    user ? ( 
        children // if user is available then show the children it is protecting
    ) : (
        <Navigate to={`/login?returnUrl=${location.pathname}`} replace /> // replace removes all the history
    )
    )
}
