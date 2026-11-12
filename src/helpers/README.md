# `helpers/` — Hàm hỗ trợ theo nghiệp vụ

Hàm **hiểu nghiệp vụ** của dự án, dùng ở nhiều feature.

## Ví dụ nội dung
- `getUserDisplayName(user)` — ghép họ tên / fallback email
- `getOrderStatusLabel(status)`, `getStatusColor(status)`
- `hasPermission(user, permission)`
- `mapApiErrorToMessage(error)`

## Phân biệt với `utils/`
| `helpers/` | `utils/` |
|---|---|
| Biết về `User`, `Order`, role... | Không biết gì về dự án |
| Dùng được `constants/` của dự án | Thuần tuý, copy sang dự án khác vẫn chạy |
| `getUserDisplayName(user)` | `formatDate(date)`, `capitalize(str)` |

Helper chỉ một feature dùng → để trong `features/<tên>/utils.js`.
