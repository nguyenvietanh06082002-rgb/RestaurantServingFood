import { Navigate } from "react-router";
import { ROUTES } from "@/constants";

export function ProtectedRoute({ user, allowedRoles, children }) {
  if (!user) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to={ROUTES.FORBIDDEN} replace />;
  }

  return children;
}