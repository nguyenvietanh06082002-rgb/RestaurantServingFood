export const ROUTES = {
    HOME: "/", // trang chủ
    LOGIN: "/login", // trang đăng nhập
    REGISTER: "/register", // trang đăng ký
    PROFILE: "/my-profile", // trang cá nhân (cần ĐĂNG NHẬP)
    PROFILE_POSTS: "/my-profile/my-posts", // route con của trang cá nhân
    PROFILE_INFO: "/my-profile/information", // route con của trang cá nhân
    PRODUCTS: "/products", // danh sách sản phẩm
    PRODUCT_DETAIL: ":id", // ":id" là THAM SỐ, ví dụ /products/1, /products/2...
    SPACES: "/spaces", // không gian nơi đặt bàn
    RESERVATION: "/reservation", // lựa chọn
    ADMIN: "/admin", // trang quản trị (cần đăng nhập VÀ có vai trò admin)
    FORBIDDEN: "/403", // trang báo "không có quyền truy cập"
}