# `components/forms/` — Thành phần form

Input và khung form dùng chung, có label/lỗi/validation hiển thị thống nhất.

## Ví dụ nội dung
- `FormField` (label + control + error message)
- `TextField`, `PasswordField`, `Select`, `DatePicker`, `FileUpload`, `RadioGroup`
- Wrapper tích hợp thư viện form (React Hook Form, Formik) nếu dùng

## Không đặt ở đây
- Form cụ thể của nghiệp vụ (`LoginForm`, `ProfileForm`) → `features/<tên>/components/`.
- Schema validation → `utils/validation/`.
