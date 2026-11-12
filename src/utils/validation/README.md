# `utils/validation/` — Kiểm tra dữ liệu

## Ví dụ nội dung
- Hàm kiểm tra: `isEmail`, `isPhoneVN`, `isStrongPassword`, `isEmpty`
- Schema dùng chung (Zod/Yup): `emailSchema`, `passwordSchema`

```js
export const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
export const isPhoneVN = (v) => /^(0|\+84)(3|5|7|8|9)\d{8}$/.test(v);
```

Schema của một form cụ thể (`loginSchema`) → đặt trong feature, ghép từ các schema ở đây. Regex dùng nhiều nơi có thể đưa vào `constants/`.
