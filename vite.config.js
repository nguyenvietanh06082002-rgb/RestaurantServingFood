// Lấy hàm defineConfig của Vite: giúp VS Code gợi ý khi viết cấu hình
import { defineConfig } from "vite";
// Lấy plugin React để Vite hiểu được JSX
import react from "@vitejs/plugin-react";
// Lấy 2 công cụ có sẵn của Node.js để đổi đường dẫn thư mục thành dạng máy hiểu được
import { fileURLToPath, URL } from "node:url";

// Xuất cấu hình của dự án
export default defineConfig({
  // Danh sách plugin: dùng plugin React
  plugins: [react()],
  // resolve.alias: khai báo "đường tắt" khi import
  resolve: {
    alias: {
      // Từ giờ, chữ "@" trong câu import nghĩa là thư mục "src".
      // Ví dụ: import { ROUTES } from "@/constants" tương đương import từ "src/constants"
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});