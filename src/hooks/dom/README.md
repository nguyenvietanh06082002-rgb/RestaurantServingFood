# `hooks/dom/` — Hook DOM & trình duyệt

## Ví dụ nội dung
- `useClickOutside(ref, handler)`
- `useEventListener(event, handler, target)`
- `useWindowSize()`, `useMediaQuery(query)`
- `useIntersectionObserver(ref)` — lazy load, infinite scroll
- `useScrollLock()`, `useCopyToClipboard()`

Luôn dọn dẹp listener/observer trong cleanup của `useEffect`.
