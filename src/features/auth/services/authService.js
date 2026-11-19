import { FAKE_USERS } from "../data/users";

const STORAGE_KEY = "currentUser";
const REGISTERED_USERS_KEY = "registeredUsers";

export function login(username, password) {
  const registeredUsers = JSON.parse(
    localStorage.getItem(REGISTERED_USERS_KEY) || "[]"
  );
  const found = [...FAKE_USERS, ...registeredUsers].find(
    (u) =>
      u.username.toLowerCase() === username.toLowerCase() &&
      u.password === password
  );

  if (!found) return null;
  const user = { id: found.id, username: found.username, name: found.name, role: found.role };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  return user;
}

export function registerUser({ name, email, username, password }) {
  const registeredUsers = JSON.parse(
    localStorage.getItem(REGISTERED_USERS_KEY) || "[]"
  );
  const usernameExists = [...FAKE_USERS, ...registeredUsers].some(
    (user) => user.username.toLowerCase() === username.toLowerCase()
  );
  const emailExists = registeredUsers.some(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );

  if (usernameExists || emailExists) return null;

  const newUser = {
    id: `user-${Date.now()}`,
    name,
    email,
    username,
    password,
    role: "user",
  };
  localStorage.setItem(
    REGISTERED_USERS_KEY,
    JSON.stringify([...registeredUsers, newUser])
  );
  return newUser;
}

export function getRegisteredUsers() {
  const registeredUsers = JSON.parse(
    localStorage.getItem(REGISTERED_USERS_KEY) || "[]"
  );

  if (!Array.isArray(registeredUsers)) {
    throw new Error("Dữ liệu thành viên đã đăng ký không hợp lệ.");
  }

  return registeredUsers.map(({ id, name, username, email }) => ({
    id,
    name,
    username,
    email,
  }));
}

export function logout() {
  localStorage.removeItem(STORAGE_KEY);
}

export function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    return null;
  }
}