# `api/` — Gọi endpoint backend

Mỗi thư mục con là một **resource** của backend. Mỗi file export các hàm gọi API thuần (trả về Promise), không chứa UI hay hook.

## Đặt ở đây
- Hàm gọi endpoint: `getList`, `getById`, `create`, `update`, `remove`...
- Tham số mặc định, chuẩn hoá request/response riêng của resource.

## Không đặt ở đây
- Cấu hình axios/fetch, interceptor, refresh token → `services/api/`.
- Hook gọi dữ liệu (`useUsers`) → `features/*/hooks/` hoặc `hooks/data/`.
- Xử lý hiển thị, format dữ liệu → `helpers/`, `utils/`.

## Phân biệt với `services/api/`
| `api/` | `services/api/` |
|---|---|
| *Gọi cái gì* (endpoint nào, tham số gì) | *Gọi bằng cách nào* (HTTP client, header, lỗi) |

## Ví dụ
```js
// api/users/index.js
import { http } from '@/services/api';

export const usersApi = {
  getList: (params) => http.get('/users', { params }),
  getById: (id) => http.get(`/users/${id}`),
};
```

Thêm resource mới → tạo `api/<resource>/index.js` theo mẫu trên.
