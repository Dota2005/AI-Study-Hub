### 1. Table `users`

Lưu trữ thông tin tài khoản người dùng và trạng thái hoạt động trong hệ thống.

| Column Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `user_id` | INT | PRIMARY KEY, AUTO_INCREMENT, NOT NULL | ID duy nhất, tự động tăng |
| `email` | VARCHAR(100) | UNIQUE, NOT NULL | Email đăng nhập của người dùng |
| `password_hash` | VARCHAR(255) | NOT NULL | Mật khẩu (đã được mã hóa/hash) |
| `full_name` | VARCHAR(255) | NOT NULL | Họ và tên đầy đủ |
| `role` | VARCHAR(20) | DEFAULT 'USER', NOT NULL | Phân quyền (USER / ADMIN) |
| `tier` | VARCHAR(20) | DEFAULT 'FREE', NOT NULL | Hạng tài khoản (FREE / PREMIUM) |
| `status` | VARCHAR(30) | DEFAULT 'INACTIVE', NOT NULL | INACTIVE: Chưa verify OTP, ACTIVE: Đã verify (được login), BLOCKED: Bị admin khóa |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Thời gian tạo tài khoản |
| `updated_at` | TIMESTAMP | NULLABLE | Thời gian cập nhật thông tin gần nhất |

<br>

### 2. Table `otp_codes`

Lưu trữ và quản lý các mã OTP dùng để xác thực email đăng ký hoặc lấy lại mật khẩu.

| Column Name | Data Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `otp_id` | INT | PRIMARY KEY, AUTO_INCREMENT, NOT NULL | ID duy nhất, tự động tăng |
| `user_id` | INT | FOREIGN KEY REFERENCES users(user_id), NOT NULL | Liên kết với ID của người dùng |
| `otp_code` | VARCHAR(6) | NOT NULL | Mã xác thực OTP (6 chữ số) |
| `purpose` | VARCHAR(30) | DEFAULT 'REGISTER', NOT NULL | Mục đích sinh mã (REGISTER / RESET_PASSWORD) |
| `expires_at` | TIMESTAMP | NOT NULL | Thời điểm mã OTP hết hiệu lực |
| `used` | BOOLEAN | DEFAULT FALSE, NOT NULL | Trạng thái: false (chưa dùng), true (đã dùng) |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Thời gian tạo mã OTP |
