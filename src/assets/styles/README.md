# `assets/styles/` — Style global

## Đặt ở đây
- `reset.css` / `normalize.css`
- `variables.css` — CSS variables: màu, spacing, radius, z-index
- `theme.css` — light/dark theme
- `typography.css`, `fonts.css` (`@font-face`)
- `index.css` — import tất cả file trên

Import **một lần** trong `main.jsx`:
```js
import '@/assets/styles/index.css';
```

## Không đặt ở đây
- Style riêng của một component → đặt cạnh component (`Button.module.css`).
