# `store/` — State global (Redux Toolkit)

Chỉ chứa state **thực sự global**: cần ở nhiều màn hình và phải tồn tại khi đổi trang.

| Thư mục | Chứa |
|---|---|
| `slices/` | `createSlice` cho từng domain global |
| `actions/` | Async thunk / action dùng chung nhiều slice |
| `selectors/` | Hàm đọc state, selector memo hoá |
| `reducers/` | `rootReducer` ghép các slice |

File cấu hình store gợi ý đặt ở `store/index.js`:
```js
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

export const store = configureStore({ reducer: rootReducer });
```

## Không đặt ở đây
- State của một component/form → `useState`/`useReducer`.
- Dữ liệu từ server (danh sách, chi tiết) → nên dùng React Query/RTK Query thay vì tự lưu vào slice.
- Slice chỉ một feature dùng → `features/<tên>/slice.js`, rồi đăng ký vào `rootReducer`.
