# `constants/` — Hằng số

Giá trị **cố định**, không đổi theo môi trường.

## Ví dụ nội dung
- `routes.js` — đường dẫn route: `ROUTES.DASHBOARD = '/dashboard'`
- `storageKeys.js` — key localStorage: `ACCESS_TOKEN`
- `queryKeys.js` — key cache (React Query...)
- `roles.js`, `status.js` — enum/union nghiệp vụ
- `regex.js`, `pagination.js` (`DEFAULT_PAGE_SIZE = 20`)

## Ví dụ
```js
export const ROUTES = {
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
};
```

## Quy ước
- Tên `UPPER_SNAKE_CASE`; có thể bọc `Object.freeze()` để tránh bị sửa.
- Giá trị đọc từ `.env` → `config/`.
