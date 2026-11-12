# `features/profile/` — Hồ sơ cá nhân

Xem và cập nhật thông tin của user đang đăng nhập.

## Ví dụ nội dung
- `components/`: `ProfileCard`, `ProfileForm`, `AvatarUploader`, `ChangePasswordForm`
- `hooks/`: `useProfile`, `useUpdateProfile`
- `utils.js`: chuẩn hoá dữ liệu form trước khi gửi

Thông tin user hiện tại lấy từ `features/auth` (qua `index.js`). Tổ chức theo cấu trúc chuẩn trong `features/README.md`.
