# `hooks/` — Custom hook dùng chung

Hook tái sử dụng ở nhiều feature, không gắn nghiệp vụ cụ thể.

| Thư mục | Chứa |
|---|---|
| `data/` | Hook về lấy/quản lý dữ liệu: fetch, phân trang |
| `dom/` | Hook tương tác DOM / trình duyệt |
| `ui/` | Hook quản lý trạng thái giao diện |
| `shared/` | Hook logic tổng quát không thuộc nhóm trên |

## Quy tắc
- Tên bắt đầu bằng `use`, mỗi hook một file: `useDebounce.js`.
- Hook nghiệp vụ (`useAuth`, `useDashboardStats`) → `features/<tên>/hooks/`.
- Re-export trong `index.js` của từng nhóm.
