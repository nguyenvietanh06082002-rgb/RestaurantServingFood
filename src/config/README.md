# `config/` — Cấu hình ứng dụng

Đọc biến môi trường **ở một chỗ duy nhất** rồi export ra object có type.

## Đặt ở đây
- Đọc `import.meta.env` (`VITE_API_URL`, `VITE_APP_ENV`...)
- Cấu hình thư viện: base URL API, timeout, feature flags
- Kiểm tra biến môi trường bắt buộc khi khởi động

## Ví dụ
```js
// config/index.js
export const appConfig = {
  apiUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
  env: import.meta.env.MODE,
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
};
```

## Quy tắc
- Nơi khác **không** đọc trực tiếp `import.meta.env`, luôn import `appConfig`.
- Giá trị không đổi theo môi trường → `constants/`.
- Không commit secret; biến Vite (`VITE_*`) đều lộ ra trình duyệt.
