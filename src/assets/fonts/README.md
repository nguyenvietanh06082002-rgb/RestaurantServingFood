# `assets/fonts/` — Font tự host

## Đặt ở đây
- File font: `Inter-Regular.woff2`, `Inter-Bold.woff2`...

## Cách dùng
Khai báo `@font-face` trong `assets/styles/` (ví dụ `fonts.css`), trỏ tới file ở đây:
```css
@font-face {
  font-family: 'Inter';
  src: url('../fonts/Inter-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
```

Ưu tiên `.woff2`, chỉ giữ các weight thực sự dùng.
