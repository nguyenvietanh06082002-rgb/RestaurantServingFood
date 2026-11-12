# `components/charts/` — Biểu đồ dùng chung

Wrapper quanh thư viện biểu đồ (Recharts, Chart.js...) với style thống nhất.

## Ví dụ nội dung
`LineChart`, `BarChart`, `PieChart`, `StatCard`, `Sparkline`.

## Quy tắc
- Nhận dữ liệu đã chuẩn hoá qua props; không tự gọi API.
- Màu lấy từ CSS variables / theme, không hard-code trong từng chart.
- Chart chỉ dùng ở dashboard → có thể đặt trong `features/dashboard/components/`.
