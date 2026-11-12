# `api/auth/` — API xác thực

Các endpoint liên quan đến đăng nhập và phiên người dùng.

## Ví dụ nội dung
- `login(credentials)`, `register(payload)`, `logout()`
- `refreshToken(token)`
- `getMe()` — lấy thông tin user hiện tại
- `forgotPassword(email)`, `resetPassword(payload)`

## Lưu ý
- Chỉ gọi API và trả dữ liệu. Việc lưu token vào storage do `services/storage` / `features/auth` đảm nhiệm.
- Logic tự động refresh token khi 401 đặt trong interceptor ở `services/api/`.
