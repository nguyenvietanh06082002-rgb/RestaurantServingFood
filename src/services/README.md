# `services/` — Hạ tầng & tích hợp bên ngoài

Code giao tiếp với hệ thống bên ngoài React: HTTP, storage trình duyệt, analytics... Là JavaScript thuần, **không** dùng hook hay JSX.

| Thư mục | Chứa |
|---|---|
| `api/` | HTTP client (axios/fetch), interceptor, xử lý lỗi |
| `storage/` | Wrapper localStorage / sessionStorage / cookie |
| `analytics/` | Wrapper tracking (GA, Mixpanel...) |

`services/index.js` re-export các service để import gọn:
```js
import { http, storage, analytics } from '@/services';
```

## Quy tắc
- Bọc thư viện bên thứ ba ở đây → đổi thư viện chỉ sửa một chỗ.
- Không chứa endpoint cụ thể (→ `api/`) hay logic nghiệp vụ (→ `features/`).
