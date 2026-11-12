# `store/selectors/` — Selector

Hàm đọc dữ liệu từ state. Component dùng selector thay vì truy cập `state.x.y` trực tiếp → đổi shape state chỉ sửa một chỗ.

```js
import { createSelector } from '@reduxjs/toolkit';

export const selectSidebarOpen = (s) => s.app.sidebarOpen;

export const selectCurrentUserName = createSelector(
  (s) => s.auth.user,
  (user) => user?.fullName ?? 'Khách',
);
```

Dùng `createSelector` khi selector tính toán/tạo object mới để tránh re-render thừa.
