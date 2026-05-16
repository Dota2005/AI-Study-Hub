Nền tảng học tập thông minh hỗ trợ quản lý tài liệu và tương tác AI Chatbot dành cho sinh viên.

## 📖 Mô tả dự án
AI Study Hub là hệ thống hỗ trợ học tập được xây dựng với mục tiêu giúp sinh viên dễ dàng upload, quản lý và tìm kiếm tài liệu học tập, đồng thời tích hợp trợ lý ảo AI Chatbot (thiết kế theo cơ sở Prompt Engineering) để hỗ trợ hỏi đáp kiến thức chuyên ngành hiệu quả.

---

## ✨ Tính năng chính
* 🔐 **Xác thực & Phân quyền** — Đăng ký, đăng nhập, xác thực email; phân quyền Guest / User / Admin.
* 👤 **Quản lý hồ sơ** — Cập nhật thông tin cá nhân, ảnh đại diện, lịch sử hoạt động.
* 📤 **Upload tài liệu** — Hỗ trợ PDF, DOCX, PPTX; quét file độc hại; hiển thị trạng thái real-time.
* 📂 **Quản lý tài liệu** — Chỉnh sửa metadata, xóa mềm (thùng rác), preview, lịch sử chỉnh sửa.
* 🔍 **Tìm kiếm & Lọc** — Tìm kiếm gần đúng, lọc theo môn học / category / người upload.
* ☁️ **Cloud Storage** — Lưu trữ an toàn, mã hóa khi truyền tải, backup định kỳ.
* 🤖 **AI Chatbot** — Trợ lý ảo hỗ trợ học tập, xử lý câu hỏi dựa trên Prompt Engineering trong lĩnh vực tài liệu, lưu lịch sử chat.
* 🛠️ **Quản trị hệ thống** — Quản lý người dùng, tài liệu, thống kê, cấu hình hệ thống.

---

## 👥 Thành viên nhóm & Phân công công việc

Dự án duy trì vai trò Frontend/Backend chuyên trách theo định hướng. Các thành viên phối hợp làm việc chéo (Cross-functional) để xử lý từ Database đến Giao diện, trong đó mỗi người sẽ chịu trách nhiệm chính cho các Business Rules được giao:

| STT | Họ và Tên | MSSV | Vai trò | Phạm vi công việc (Business Rules) |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Nguyễn Đoàn Tâm** | SE196655 | 👑 Leader / Backend | Thiết kế DB, Core API & xử lý API Auth (BR-01 → BR-15) |
| 2 | **Trần Kiến Quốc** | SE204127 | Backend Developer | API User Profile (BR-16 → BR-20) & Hỗ trợ xử lý logic Data |
| 3 | **Nguyễn Ngọc Bảo Quân**| SE192897 | Backend Developer | API Doc Upload, Cloud Storage & File Processing (BR-21 → 30, 49 → 55) |
| 4 | **Mai Minh Quân** | SE204020 | Frontend Developer | Thiết kế UI/UX Doc Management & Search (BR-31 → BR-48) |
| 5 | **Diệp Khánh Minh** | SE204209 | Frontend Developer | Thiết kế UI/UX AI Chatbot & Tích hợp Prompt API (BR-56 → BR-65) |
| 6 | **Ngô Quốc Khánh** | SE204180 | Frontend Developer | Thiết kế UI/UX Administration Dashboard (BR-66 → BR-82) |

---

## 🛠️ Công nghệ sử dụng

### 1. Frontend
* **React & Vite:** Thư viện xây dựng giao diện người dùng và Build tool siêu tốc.
* **Axios:** HTTP Client giao tiếp với API.
* **TailwindCSS / MUI:** Styling & UI Components.

### 2. Backend
* **Spring Boot:** Framework Java xây dựng REST API.
* **Spring Security + JWT:** Xác thực & phân quyền bảo mật.
* **Spring Data JPA:** ORM tương tác cơ sở dữ liệu.

### 3. Database, Storage & AI
* **MySQL 8.0+:** Cơ sở dữ liệu quan hệ chính của hệ thống.
* **Cloud Storage:** Lưu trữ file tài liệu vật lý (AWS S3 / Firebase).
* **AI / LLM API:** Google Gemini API / OpenAI API (Xử lý hỏi đáp bằng kỹ thuật Prompt Engineering).

---

## 🏗️ Kiến trúc hệ thống
```text
┌─────────────────┐        ┌──────────────────┐        ┌─────────────┐
│   React Client  │◄──────►│  Spring Boot API  │◄──────►│    MySQL    │
│   (Frontend)    │  HTTP  │    (Backend)      │  JPA   │  Database   │
└─────────────────┘        └──────────────────┘        └─────────────┘
                                    │
                        ┌───────────┴───────────┐
                        │                       │
                ┌───────▼──────┐       ┌────────▼──────┐
                │ Cloud Storage│       │   AI Service  │
                │  (Documents) │       │   (Chatbot)   │
                └──────────────┘       └───────────────┘
Yêu cầu hệ thống: Java 17+ | Node.js 18+ | MySQL 8.0+ | Maven 3.8+

1. Clone repository
git clone [https://github.com/](https://github.com/)<your-org>/ai-study-hub.git
cd ai-study-hub

2. Khởi tạo Database
# Import schema
mysql -u root -p < backend/src/main/resources/schema.sql

3. Cấu hình Backend
cd backend
cp src/main/resources/application.properties.example src/main/resources/application.properties
# Chỉnh sửa: DB_URL, DB_USERNAME, DB_PASSWORD, JWT_SECRET, LLM_API_KEY...
mvn spring-boot:run

4. Cấu hình Frontend
cd frontend
npm install
cp .env.example .env
# Chỉnh sửa: VITE_API_URL=http://localhost:8080
npm run dev


📁 Cấu trúc thư mục

ai-study-hub/
├── backend/                  # Spring Boot Application
│   ├── src/main/java/
│   │   └── com/aistudyhub/
│   │       ├── controller/   # REST Controllers
│   │       ├── service/      # Business Logic
│   │       ├── repository/   # JPA Repositories
│   │       ├── entity/       # Database Entities
│   │       ├── dto/          # Data Transfer Objects
│   │       └── config/       # Security, CORS Config
│   └── pom.xml
├── frontend/                 # React Application
│   ├── src/
│   │   ├── components/       # UI Components
│   │   ├── pages/            # Page Views
│   │   ├── services/         # API Calls
│   │   ├── hooks/            # Custom Hooks
│   │   └── utils/            # Helper Functions
│   └── package.json
├── docs/                     # Tài liệu dự án
│   └── business-rules.md
└── README.md
