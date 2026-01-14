const { users } = require("./database");

const MAX_ATTEMPTS = 5;
const LOCKOUT_TIME = 10 * 60 * 1000; // 10 minutes

function login(email, password, attempts = 0, now = Date.now()) {
  // Empty fields (handled by HTML in real app, simulated here)
  if (!email || !password) {
    return {
      success: false,
      message: "Validation error"
    };
  }

  const user = users.find(
    u => u.email === email && u.password === password
  );

  // Successful login
  if (user) {
    return {
      success: true,
      role: user.type,
      redirect:
        user.type === "student"
          ? "student_dashboard.html"
          : "supervisor_dashboard.html",
      attempts: 0
    };
  }

  // Failed login
  attempts++;

  if (attempts >= MAX_ATTEMPTS) {
    return {
      success: false,
      locked: true,
      lockoutUntil: now + LOCKOUT_TIME,
      message: "Account blocked for 10 minutes",
      attempts
    };
  }

  return {
    success: false,
    locked: false,
    message: "Error message displayed",
    attempts
  };
}

module.exports = { login, MAX_ATTEMPTS, LOCKOUT_TIME };
