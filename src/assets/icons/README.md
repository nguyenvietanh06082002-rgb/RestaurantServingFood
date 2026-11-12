# `assets/icons/` — Icon SVG

## Đặt ở đây
- Icon SVG của dự án: `arrow-left.svg`, `user.svg`...
- `index.js` re-export để import gọn.

## Ví dụ
```js
// assets/icons/index.js
export { default as ArrowLeftIcon } from './arrow-left.svg';
export { default as UserIcon } from './user.svg';
```
(Muốn import SVG thành React component → dùng plugin `vite-plugin-svgr`, import dạng `./user.svg?react`.)

## Quy ước
- Tên file `kebab-case`, export tên `PascalCase` + hậu tố `Icon`.
- Xoá width/height cứng và để `fill="currentColor"` để đổi màu bằng CSS.
