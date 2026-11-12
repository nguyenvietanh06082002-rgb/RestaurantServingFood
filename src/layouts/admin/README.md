# `layouts/admin/` — Layout quản trị

Khung cho khu vực admin.

## Thường gồm
`Sidebar` (menu điều hướng, thu gọn được) + `Header` (breadcrumb, user menu) + vùng nội dung `<Outlet />`.

File gợi ý: `AdminLayout.jsx`, `index.js`. Chặn quyền admin ở router (route guard), không trong layout.
