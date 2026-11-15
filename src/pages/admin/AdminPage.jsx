export function AdminPage({ onLogout }) {
  return (
    <div>
      <h1>Trang quản trị</h1>
      <p>Chào mừng ông chủ trở về!!!</p>
      <button type="button" onClick={onLogout}>
        Đăng xuất
      </button>
    </div>
  );
}