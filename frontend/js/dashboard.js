document.addEventListener("DOMContentLoaded", function () {
  const userNameElement = document.getElementById("dashboardUserName");
  const currentUserRaw = localStorage.getItem("currentUser");

  if (!currentUserRaw) {
    window.location.href = "login.html";
    return;
  }

  try {
    const currentUser = JSON.parse(currentUserRaw);

    if (userNameElement) {
      userNameElement.textContent = `Welcome, ${currentUser.fullName} (${currentUser.role})`;
    }
  } catch (error) {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
  }
});
