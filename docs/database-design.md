# Database Design - AI Study Hub

## 1. Table `users`
Lưu trữ thông tin tài khoản người dùng trong hệ thống.

| Column Name | Data Type    | Constraints                             | Description |
| :---        | :---         | :---                                    | :---        |
| `user_id`   | INT          | PRIMARY KEY, NOT NULL, AUTO_INCREMENT   | ID tự tăng |
| `email`     | VARCHAR(50)  | UNIQUE, NOT NULL                        | Email đăng nhập |
| `password`  | VARCHAR(255) | NOT NULL                                | Mật khẩu (đã mã hóa) |
| `fullname`  | VARCHAR(255) |                                         | Họ và tên |
| `role`      | VARCHAR(20)  | NOT NULL, DEFAULT 'USER'                | Quyền (ví dụ: USER/ADMIN) |
| `tier`      | VARCHAR(20)  | NOT NULL, DEFAULT 'FREE'                | Hạng tài khoản (ví dụ: FREE/PREMIUM) |
| `status`    | VARCHAR(20)  | NOT NULL, DEFAULT 'INACTIVE'            | Trạng thái (INACTIVE/ACTIVE/BANNED) |
| `createdAt` | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP               | Ngày tạo tài khoản |

## 2. Table `otp_codes`
Lưu trữ mã OTP để xác thực email.

| Column Name | Data Type    | Constraints                                  | Description |
| :---        | :---         | :---                                         | :---        |
| `otp_id`    | INT          | PRIMARY KEY, NOT NULL, AUTO_INCREMENT        | ID tự tăng |
| `user_id`   | INT          | NOT NULL, FOREIGN KEY REFERENCES users(user_id)| Liên kết với user_id của bảng users |
| `code`      | VARCHAR(6)   | NOT NULL                                     | Mã OTP 6 số |
| `expiredAt` | TIMESTAMP    | NOT NULL                                     | Thời gian hết hạn OTP |