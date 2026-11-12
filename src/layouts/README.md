# `layouts/` — Khung trang

Layout bọc ngoài nhóm route, ghép các mảnh từ `components/layout/` và render nội dung trang ở giữa.

| Thư mục | Dùng cho |
|---|---|
| `main/` | Trang chính của người dùng |
| `admin/` | Khu vực quản trị |
| `auth/` | Đăng nhập, đăng ký |

## Ví dụ
```jsx
// layouts/main/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@/components/layout';

export function MainLayout() {
  return (
    <>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </>
  );
}
```

## Quy tắc
- Layout chỉ lo **bố cục**; không chứa nội dung của trang cụ thể.
- Kiểm tra quyền truy cập dùng `ProtectedRoute` từ `features/auth`, gắn ở router.
