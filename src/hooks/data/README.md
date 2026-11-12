# `hooks/data/` — Hook dữ liệu

Hook tổng quát để lấy và quản lý dữ liệu bất đồng bộ.

## Ví dụ nội dung
- `useFetch(fn, deps)` — gọi Promise, trả `{ data, error, loading }`
- `usePagination({ total, pageSize })`
- `useInfiniteList(fetchPage)`
- `useMutation(fn)` — submit có trạng thái loading/error

Hook cho resource cụ thể (`useUsers`) → `features/<tên>/hooks/`. Nếu dùng React Query/SWR, thư mục này chứa wrapper/cấu hình chung.
