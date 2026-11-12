# `components/` — UI dùng chung

Component **tái sử dụng ở nhiều nơi**, không biết gì về nghiệp vụ. Nhận dữ liệu qua props, báo sự kiện qua callback.

| Thư mục | Chứa |
|---|---|
| `common/` | UI cơ bản: Button, Input, Badge, Avatar, Spinner... |
| `forms/` | Thành phần form: FormField, Select, DatePicker... |
| `modals/` | Modal, Dialog, Drawer dùng chung |
| `charts/` | Biểu đồ tái sử dụng |
| `layout/` | Mảnh ghép layout: Header, Sidebar, Footer |

## Quy tắc
- **Không** gọi API, **không** đọc/ghi store, **không** import từ `features/` hoặc `pages/`.
- Component chỉ dùng trong 1 feature → đặt trong `features/<tên>/components/`.
- Mỗi component một thư mục:
```
common/Button/
├── Button.jsx
├── Button.module.css
├── Button.test.jsx   (nếu có)
└── index.js          // export { Button } from './Button';
```
- Mô tả props bằng JSDoc ngay trong file component (tuỳ chọn: `prop-types`).
