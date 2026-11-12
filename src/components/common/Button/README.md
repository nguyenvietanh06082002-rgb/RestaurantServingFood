# `components/common/Button/` — Button

Nút bấm chuẩn của dự án.

## Cấu trúc
```
Button/
├── Button.jsx
├── Button.module.css
└── index.js
```

## API gợi ý
```jsx
/**
 * @param {object} props
 * @param {"primary"|"secondary"|"ghost"|"danger"} [props.variant]
 * @param {"sm"|"md"|"lg"} [props.size]
 * @param {boolean} [props.loading]
 * @param {React.ReactNode} [props.leftIcon]
 */
export function Button({ variant = "primary", size = "md", loading, leftIcon, children, ...rest }) { ... }

<Button variant="primary" loading={isSubmitting}>Lưu</Button>
```

Mô tả props bằng JSDoc để editor gợi ý (tuỳ chọn: thêm `prop-types`).
