import './App.css'

function App() {
  const [user, setUser] = useState(() => getCurrentUser());

  const handleLogout = () => {
    logout(); 
    setUser(null); 
  };

  return (
    <Routes>
     <Routes element={<MainLayout user={user} onLogout={handleLogout} />}>
      <Route path={ROUTES.HOME} element={<HomePage />} />

      <Route path={ROUTES.LOGIN} element={<LoginPage onLogin={setUser} />} />

      <Route
          path={ROUTES.ADMIN}
          element={
            <ProtectedRoute user={user} allowedRoles={[ROLES.ADMIN]}>
              <AdminPage />
            </ProtectedRoute>
          }
        />
      
      {/* Trang 403: ProtectedRoute chuyển tới đây khi không đủ quyền */}
      <Route path={ROUTES.FORBIDDEN} element={<ForbiddenPage />} />
      {/* path="*": mọi đường dẫn còn lại không khai báo ở trên đều là trang không tồn tại (404) */}
      <Route path="*" element={<NotFoundPage />} />
     </Routes>
    </Routes>
  )
}

export default App
