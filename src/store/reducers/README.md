# `store/reducers/` — Root reducer

Ghép reducer từ `store/slices/` và `features/*/slice.js` thành `rootReducer`.

```js
// store/reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import appReducer from '../slices/appSlice';
import authReducer from '@/features/auth/slice';

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});
```

Không viết reducer kiểu `switch/case` thủ công ở đây — dùng `createSlice`.
