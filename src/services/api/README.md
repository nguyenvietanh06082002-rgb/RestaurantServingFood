# `services/api/` — HTTP client

Cấu hình **cách** gọi API, dùng chung cho mọi hàm trong `src/api/`.

## Đặt ở đây
- Tạo instance axios/fetch với `baseURL` từ `config/`
- Interceptor request: gắn `Authorization` header
- Interceptor response: chuẩn hoá lỗi, tự refresh token khi 401
- Kiểu lỗi chung (`ApiError`)

## Ví dụ
```js
// services/api/index.js
import axios from 'axios';
import { appConfig } from '@/config';
import { storage } from '@/services/storage';

export const http = axios.create({ baseURL: appConfig.apiUrl, timeout: 15000 });

http.interceptors.request.use((req) => {
  const token = storage.get('ACCESS_TOKEN');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});
```

Endpoint cụ thể (`/users`, `/auth/login`) → `src/api/`.
