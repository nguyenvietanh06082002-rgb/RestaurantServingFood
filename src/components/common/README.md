# `components/common/` — UI cơ bản

"Bộ UI kit" của dự án: các thành phần nhỏ nhất, dùng khắp nơi.

## Ví dụ nội dung
`Button`, `IconButton`, `Input`, `Checkbox`, `Badge`, `Avatar`, `Tag`, `Tooltip`, `Spinner`, `Skeleton`, `EmptyState`, `Pagination`, `Table`.

## Quy tắc
- Mỗi component một thư mục con (xem `Button/`).
- Hỗ trợ `className` và các props HTML gốc (`...rest`) để dễ mở rộng.
- Biến thể dùng props (`variant`, `size`), không tạo component mới cho mỗi kiểu.
