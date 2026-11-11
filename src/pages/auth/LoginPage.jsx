import { LoginForm } from "@/features/auth";

export function LoginPage({ onLogin }) {
  return (
    <div>
        <h1>Đăng nhập</h1>
        <LoginForm onLogin={onLogin} />
    </div>
  );
}
