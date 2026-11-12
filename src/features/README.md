# `features/` — Code theo tính năng

Mỗi thư mục con là **một tính năng** khép kín: UI riêng, hook, gọi API và state của tính năng đó.

## Cấu trúc chuẩn của một feature
```
features/<tên>/
├── components/   # UI chỉ dùng trong feature này
├── hooks/        # useXxx của feature
├── api.js        # (tuỳ chọn) gọi API riêng, hoặc dùng api/<resource>
├── slice.js      # (tuỳ chọn) state Redux của feature
├── constants.js  # hằng số riêng của feature
├── utils.js      # hàm hỗ trợ riêng
└── index.js      # PUBLIC API — chỉ export thứ bên ngoài được dùng
```
Không cần tạo đủ mọi file ngay; chỉ thêm khi có nhu cầu.

## Quy tắc
- Bên ngoài chỉ import qua `index.js`: `import { LoginForm } from '@/features/auth'`.
- Feature **không** import chéo vào bên trong feature khác. Phần dùng chung → đưa xuống `components/`, `hooks/`, `utils/`...
- Thứ chỉ một feature dùng → giữ trong feature, đừng đưa ra thư mục chung quá sớm.

## Phân biệt với `pages/`
- `features/`: logic + UI của tính năng.
- `pages/`: lớp mỏng gắn với route, ghép các feature lại.
