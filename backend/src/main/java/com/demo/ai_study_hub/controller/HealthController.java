package com.demo.ai_study_hub.controller;
// LƯU Ý: Chỗ import ApiResponse này, mày hãy tự gõ hoặc dùng Alt+Enter để IntelliJ nó tự import đúng đường dẫn package của mày nhé.
import com.demo.ai_study_hub.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class HealthController {

    @GetMapping("/health")
    public ResponseEntity<ApiResponse<Map<String, String>>> checkHealth() {
        // Tạo cục data báo "UP"
        Map<String, String> data = new HashMap<>();
        data.put("status", "UP");

        // Xếp vào đĩa 3 ngăn
        ApiResponse<Map<String, String>> response = ApiResponse.<Map<String, String>>builder()
                .success(true)
                .message("AI Study Hub backend is running")
                .data(data)
                .build();

        // Bưng ra cho khách
        return ResponseEntity.ok(response);
    }
}
