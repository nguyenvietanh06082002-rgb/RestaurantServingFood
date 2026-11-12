# `assets/` — Tài nguyên tĩnh qua bundler

File được `import` trong code; Vite sẽ tối ưu, hash tên file khi build.

| Thư mục | Chứa |
|---|---|
| `fonts/` | File font (`.woff2`, `.woff`) |
| `icons/` | Icon SVG |
| `images/` | Ảnh `.png`, `.jpg`, `.webp`, `.svg` minh hoạ |
| `styles/` | CSS/SCSS global: reset, biến, theme |

## Phân biệt với `public/`
- `src/assets/`: file được import trong code → có hash, cache tốt.
- `public/`: file cần URL cố định, không import (favicon, `robots.txt`, file cho bên thứ ba).

## Quy ước
- Tên file `kebab-case`: `logo-dark.svg`, `empty-state.webp`.
- Ảnh nên nén trước khi commit, ưu tiên `.webp`/`.svg`.
