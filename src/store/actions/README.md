# `store/actions/` — Action & thunk dùng chung

Với Redux Toolkit, action thường sinh tự động từ slice. Thư mục này chỉ dành cho:

- **Action dùng chung nhiều slice**, ví dụ `logout` để mọi slice reset state:
  ```js
  export const resetStore = createAction('app/reset');
  // trong slice: extraReducers: (b) => b.addCase(resetStore, () => initialState)
  ```
- **Async thunk** (`createAsyncThunk`) tác động nhiều slice.

Thunk chỉ phục vụ một slice → viết cùng file slice đó.
