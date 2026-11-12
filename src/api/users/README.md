# `api/users/` — API người dùng

CRUD và các thao tác trên resource **user**.

## Ví dụ nội dung
- `getList(params)`, `getById(id)`
- `create(payload)`, `update(id, payload)`, `remove(id)`
- `changeRole(id, role)`, `uploadAvatar(id, file)`

Thông tin của **chính user đang đăng nhập** (`/me`) đặt ở `api/auth/`.
