# `features/auth/` — Xác thực

Đăng nhập, đăng ký, quên mật khẩu, quản lý phiên.

## Ví dụ nội dung
- `components/`: `LoginForm`, `RegisterForm`, `ForgotPasswordForm`
- `hooks/`: `useAuth` (user hiện tại, `login`, `logout`), `useRequireAuth`
- `slice.js`: state `user`, `isAuthenticated`
- `ProtectedRoute` / `GuestRoute` — chặn route theo trạng thái đăng nhập
- `index.js`: export những gì `pages/auth` và router cần

Gọi API dùng `api/auth/`; lưu token dùng `services/storage/`.
