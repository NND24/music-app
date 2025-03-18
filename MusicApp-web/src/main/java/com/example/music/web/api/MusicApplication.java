package com.example.music.web.api;

import jakarta.ws.rs.ApplicationPath;
import jakarta.ws.rs.core.Application;

@ApplicationPath("/api")  // Đặt tiền tố URL cho API (ví dụ: http://localhost:8080/api/songs)
public class MusicApplication extends Application {
}
