# `features/dashboard/` — Tổng quan

Màn hình tổng quan: số liệu, biểu đồ, hoạt động gần đây.

## Ví dụ nội dung
- `components/`: `StatsOverview`, `RevenueChart`, `RecentActivity`
- `hooks/`: `useDashboardStats`
- `api.js`: `getStats()`, `getRecentActivities()`
- `constants.js`: hằng số riêng (khoảng thời gian thống kê...)

Biểu đồ dùng lại `components/charts/`. Tổ chức theo cấu trúc chuẩn trong `features/README.md`.
