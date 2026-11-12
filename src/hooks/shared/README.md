# `hooks/shared/` — Hook logic tổng quát

Hook tiện ích không thuộc nhóm `data/`, `dom/`, `ui/`.

## Ví dụ nội dung
- `useDebounce(value, delay)`, `useThrottle(value, delay)`
- `useToggle(initial)`, `usePrevious(value)`
- `useLocalStorage(key, initial)`
- `useIsMounted()`, `useInterval(cb, ms)`

Trước khi thêm vào đây, cân nhắc xem hook có thuộc `data/`, `dom/`, `ui/` không — tránh biến `shared/` thành nơi "để tạm".
