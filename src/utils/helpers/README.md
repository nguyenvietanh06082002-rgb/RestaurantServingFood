# `utils/helpers/` — Tiện ích chung

Hàm tiện ích tổng quát không thuộc `formatting/` hay `validation/`.

## Ví dụ nội dung
- `cn(...classes)` — ghép className có điều kiện
- `sleep(ms)`, `debounce(fn, ms)`, `throttle(fn, ms)`
- `groupBy(arr, key)`, `uniqBy(arr, key)`, `chunk(arr, size)`
- `omit(obj, keys)`, `pick(obj, keys)`, `deepClone(obj)`
- `generateId()`, `downloadFile(blob, name)`

## Phân biệt với `src/helpers/`
`utils/helpers/` **không** biết nghiệp vụ (`groupBy`, `sleep`). Hàm như `getUserDisplayName(user)` thuộc `src/helpers/`.
