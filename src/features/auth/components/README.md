# `features/auth/components/` — UI của auth

Component **chỉ dùng trong tính năng auth**.

## Ví dụ nội dung
`LoginForm`, `RegisterForm`, `ForgotPasswordForm`, `ResetPasswordForm`, `SocialLoginButtons`.

## Quy tắc
- Dùng lại UI từ `components/common`, `components/forms`.
- Được phép gọi hook của feature (`useAuth`) — khác với `components/` dùng chung.
- Component muốn dùng ở feature khác → chuyển lên `components/`.
