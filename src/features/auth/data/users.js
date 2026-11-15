export const ROLES = {
  ADMIN: "admin", 
  USER: "user", 
};

export const FAKE_USERS = [
  { id: 1, username: "admin", password: "123", name: "Quản trị viên", role: ROLES.ADMIN },
  { id: 2, username: "vanh", password: "123", name: "Vanh", role: ROLES.USER },
];