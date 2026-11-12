# `api/common/` — API dùng chung

Endpoint không thuộc riêng resource nào, được nhiều màn hình dùng.

## Ví dụ nội dung
- `uploadFile(file)`
- Danh mục / master data: `getProvinces()`, `getCategories()`
- Cấu hình hệ thống từ server: `getAppSettings()`

Nếu một nhóm endpoint ở đây lớn dần và gắn với một resource rõ ràng → tách ra thư mục riêng (`api/<resource>/`).
