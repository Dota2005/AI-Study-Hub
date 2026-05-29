const API_BASE_URL = "http://localhost:8080";

/**
 * Shared API request helper.
 * Tất cả các cuộc gọi API từ Frontend bắt buộc phải đi qua hàm này.
 
 * Backend response format:
 * {
 * success: boolean,
 * message: string,
 * data: object | null
 * }
 */
async function apiRequest(endpoint, options = {}) {
  try {
    // Tự động thêm Content-Type là application/json cho mọi request
    const headers = {
      "Content-Type": "application/json",
      ...(options.headers || {})
    };

    // Tự động chuyển object thô thành chuỗi JSON nếu có body truyền vào
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: options.method || "GET",
      headers: headers,
      body: options.body ? JSON.stringify(options.body) : undefined
    });

    // Ép kiểu dữ liệu trả về thành JSON
    const result = await response.json();

    // Kiểm tra cấu trúc Response từ Backend xem có đúng contract không
    if (
      typeof result.success === "undefined" ||
      typeof result.message === "undefined" ||
      typeof result.data === "undefined"
    ) {
      throw new Error("Invalid API response format. Expected success, message, data.");
    }

    // Nếu HTTP status không phải 2xx hoặc Backend trả về success: false
    if (!response.ok || result.success === false) {
      // In cảnh báo ra tab Console giúp FE dễ debug khi Backend trả lỗi về
      console.warn("API request failed:", result);
      throw new Error(result.message || "API request failed.");
    }

    // Trả về kết quả hoàn chỉnh nếu mọi thứ mượt mà
    return result;
  } catch (error) {
    console.error("API request error:", error);
    throw error; // Bắn lỗi ra ngoài để các file js khác catch và hiển thị lên UI
  }
}