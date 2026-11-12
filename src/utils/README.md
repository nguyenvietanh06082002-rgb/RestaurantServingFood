# `utils/` — Hàm tiện ích thuần

Hàm **thuần** (cùng input → cùng output), tổng quát, không biết gì về nghiệp vụ dự án. Copy sang dự án khác vẫn dùng được.

| Thư mục | Chứa |
|---|---|
| `formatting/` | Định dạng hiển thị: ngày, tiền, số, chuỗi |
| `validation/` | Kiểm tra dữ liệu, schema validate |
| `helpers/` | Tiện ích chung: mảng, object, async, className |

## Quy tắc
- Không dùng React, không import từ `features/`, `store/`, `services/`.
- Mỗi hàm nên có unit test — đây là phần dễ test nhất.
- Hàm cần hiểu nghiệp vụ (`User`, `Order`) → `src/helpers/`.
