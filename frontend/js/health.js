/**
 * Kiểm tra trạng thái kết nối tới Backend thông qua API /api/health
 */
async function checkBackendHealth() {
  const backendStatus = document.getElementById("backendStatus");

  // Nếu trang hiện tại không có phần tử hiển thị trạng thái, dừng hàm luôn
  if (!backendStatus) {
    return;
  }

  // Cập nhật trạng thái đang kiểm tra lên UI
  backendStatus.textContent = "Checking backend connection...";
  backendStatus.className = "status-box status-checking";

  try {
    // Gọi API thật thông qua hàm apiRequest đã tạo ở api.js
    const result = await apiRequest("/api/health");

    // Nếu kết nối thành công, hiển thị message và status từ Backend trả về
    backendStatus.textContent = `${result.message} - Status: ${result.data.status}`;
    backendStatus.className = "status-box status-success";
  } catch (error) {
    // Nếu xảy ra lỗi (BE chưa chạy, lỗi mạng, lỗi sập nguồn...), hiển thị lỗi lên UI
    backendStatus.textContent = `Backend disconnected: ${error.message}`;
    backendStatus.className = "status-box status-error";
  }
}

// Tự động chạy hàm kiểm tra ngay khi trang web tải xong toàn bộ DOM
document.addEventListener("DOMContentLoaded", checkBackendHealth);