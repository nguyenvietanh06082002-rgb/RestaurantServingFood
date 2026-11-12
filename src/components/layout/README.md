# `components/layout/` — Mảnh ghép layout

Các **phần** tạo nên khung trang.

## Ví dụ nội dung
`Header`, `Sidebar`, `Footer`, `Navbar`, `Breadcrumb`, `PageHeader`, `Container`.

## Phân biệt với `layouts/`
| `components/layout/` | `layouts/` |
|---|---|
| Từng mảnh: Header, Sidebar | Khung hoàn chỉnh ghép các mảnh: `AdminLayout` |
| Không biết route | Gắn với router, render `<Outlet />` |
