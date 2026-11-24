import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router";
import { ROUTES } from "@/constants";
import { ROLES, ProtectedRoute, logout, getCurrentUser } from "@/features/auth";
import { Header } from "@/components/layout";
import { HomePage } from "@/pages/home/HomePage";
import { LoginPage } from "@/pages/auth";
import { RegisterPage } from "@/pages/register";
import { ProfilePage } from "@/pages/profile";
import { AdminPage } from "@/pages/admin";
import { ForbiddenPage, NotFoundPage } from "@/pages/errors";
import ProductsPage from "@/pages/products/ProductsPage";
import SpacesPage from "@/pages/spaces/SpacesPage";
import ReservationPage from "@/pages/reservation/ReservationPage";

export default function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(getCurrentUser());
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname]);

  const handleLogout = () => {
    logout();
    setUser(null);
    navigate(ROUTES.LOGIN);
  };

  return (
    <>
      <Header user={user} onLogout={handleLogout} />
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.PRODUCTS} element={<ProductsPage />} />
        <Route path={ROUTES.SPACES} element={<SpacesPage />} />
        <Route path={ROUTES.RESERVATION} element={<ReservationPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage onLogin={setUser} />} />
        <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        <Route
          path={ROUTES.PROFILE}
          element={
            <ProtectedRoute user={user}>
              <ProfilePage user={user} onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route
          path={ROUTES.ADMIN}
          element={
            <ProtectedRoute user={user} allowedRoles={[ROLES.ADMIN]}>
              <AdminPage onLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route path={ROUTES.FORBIDDEN} element={<ForbiddenPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
