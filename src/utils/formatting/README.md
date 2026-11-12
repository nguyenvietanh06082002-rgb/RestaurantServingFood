# `utils/formatting/` — Định dạng dữ liệu

## Ví dụ nội dung
```js
export const formatCurrency = (v, currency = 'VND') =>
  new Intl.NumberFormat('vi-VN', { style: 'currency', currency }).format(v);

export const formatDate = (d, opts) =>
  new Intl.DateTimeFormat('vi-VN', opts).format(new Date(d));

export const truncate = (s, max) =>
  s.length > max ? `${s.slice(0, max)}…` : s;
```
Khác: `formatNumber`, `formatPhone`, `formatFileSize`, `timeAgo`, `capitalize`.
