import "./ProfilePage.css";

export function ProfilePage({ user, onLogout }) {
  return (
    <main className="profile-page">
      <section className="profile-card">
        <h1 className="profile-title">Trang cá nhân</h1>

        <div className="profile-info">
          <p>
            <span>Xin chào:</span>
            {user.name}
          </p>

          <p>
            <span>Tài khoản:</span>
            {user.username}
          </p>
        </div>

        <button
          type="button"
          className="profile-logout"
          onClick={onLogout}
        >
          Đăng xuất
        </button>
      </section>
    </main>
  );
}