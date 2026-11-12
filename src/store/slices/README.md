# `store/slices/` — Slice global

Mỗi file một slice (`createSlice`) cho state dùng chung toàn app.

## Ví dụ nội dung
`appSlice.js` (loading toàn cục, sidebar mở/đóng), `notificationSlice.js`.

```js
import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: { sidebarOpen: true },
  reducers: {
    toggleSidebar: (s) => { s.sidebarOpen = !s.sidebarOpen; },
    setSidebar: (s, a) => { s.sidebarOpen = a.payload; },
  },
});

export const { toggleSidebar, setSidebar } = appSlice.actions;
export default appSlice.reducer;
```

Slice gắn với một tính năng (auth, settings) → `features/<tên>/slice.js`.
