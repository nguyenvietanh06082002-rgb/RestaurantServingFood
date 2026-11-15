export function ProfilePage({ user, onLogout }) {
  return (
    <main>
      <h1>Trang cá nhân</h1>
      <p>Xin chào, {user.name}</p>
      <p>Tài khoản: {user.username}</p>
      <button type="button" onClick={onLogout}>
        Đăng xuất
      </button>
    </main>
  );
}