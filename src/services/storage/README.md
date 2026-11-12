# `services/storage/` — Lưu trữ phía trình duyệt

Wrapper cho localStorage / sessionStorage / cookie: tự `JSON.parse/stringify`, bắt lỗi, dùng key cố định.

## Ví dụ
```js
// services/storage/index.js
import { STORAGE_KEYS } from '@/constants';

export const storage = {
  get(key) {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS[key]);
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },
  set(key, value) {
    localStorage.setItem(STORAGE_KEYS[key], JSON.stringify(value));
  },
  remove(key) {
    localStorage.removeItem(STORAGE_KEYS[key]);
  },
};
```

Không gọi `localStorage` trực tiếp ở nơi khác. Key định nghĩa trong `constants/`.
