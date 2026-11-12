# `components/modals/` — Modal & Dialog

## Ví dụ nội dung
- `Modal` — khung modal cơ bản (overlay, đóng bằng Esc/click ngoài, focus trap)
- `ConfirmDialog` — xác nhận Có/Không
- `Drawer` — panel trượt từ cạnh màn hình

## Không đặt ở đây
- Modal có nội dung nghiệp vụ (`EditUserModal`) → `features/<tên>/components/`, dùng lại `Modal` ở đây.

Trạng thái đóng/mở dùng hook `useDisclosure` trong `hooks/ui/`.
