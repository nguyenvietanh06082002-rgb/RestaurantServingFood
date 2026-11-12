# `pages/` — Trang theo route

Mỗi page tương ứng một route. Page là **lớp mỏng**: lấy tham số route, đặt tiêu đề, ghép component từ `features/`.

## Ví dụ
```jsx
// pages/profile/ProfilePage.jsx
import { ProfileCard, ProfileForm } from '@/features/profile';

export function ProfilePage() {
  return (
    <>
      <ProfileCard />
      <ProfileForm />
    </>
  );
}
```

## Quy tắc
- Không viết logic nghiệp vụ, gọi API hay JSX dài ở đây → đưa vào `features/`.
- Tên file `XxxPage.jsx`; nhóm theo khu vực (`auth/LoginPage.jsx`, `auth/RegisterPage.jsx`).
- Khai báo route trong router, nên lazy load page: `lazy(() => import('@/pages/profile'))`.
