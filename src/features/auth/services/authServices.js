import { FAKE_USERS } from "../data/users";

const STORAGE_KEY = "currentUser";

export function login(username, password) {
  const found = FAKE_USERS.find(
    (u) => u.username === username && u.password === password
  );

  if (!found) return null;

  const user = { id: found.id, username: found.username, name: found.name, role: found.role };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  return user;
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
