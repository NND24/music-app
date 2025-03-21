package com.example.music.web.servlet;

import com.example.music.entity.Playlist;
import com.example.music.service.PlaylistService;
import jakarta.ejb.EJB;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import com.google.gson.Gson;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.http.Part;
import java.io.File;
import java.nio.file.Paths;
import java.util.UUID;

@MultipartConfig(
        fileSizeThreshold = 1024 * 1024, // 1MB
        maxFileSize = 10 * 1024 * 1024, // 10MB
        maxRequestSize = 20 * 1024 * 1024 // 20MB
)
@WebServlet("/playlist")
public class PlaylistServlet extends HttpServlet {

    @EJB
    private PlaylistService playlistService;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        String playlistIdParam = req.getParameter("playlistId");

        Gson gson = new Gson();

        if (playlistIdParam != null) {
            try {
                Integer playlistId = Integer.valueOf(playlistIdParam);
                Playlist playlist = playlistService.getPlaylistById(playlistId);
                String json = gson.toJson(playlist);
                resp.getWriter().write(json);
            } catch (NumberFormatException e) {
                resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                resp.getWriter().write("{\"error\": \"Invalid playlistId\"}");
            }
        } else {
            List<Playlist> playlists = playlistService.getAllPlaylists();
            String json = gson.toJson(playlists);

            resp.getWriter().write(json);
        }
    }

    private static final String PLAYLIST_IMAGE_DIR = "/assets/image/playlists";
    private static final String ROOT_DIR = "D:/Workspace/MusicApp/MusicApp-web/src/main/webapp";

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        String name = req.getParameter("name");
        // Tạo thư mục nếu chưa tồn tại
        File imageDir = new File(ROOT_DIR + PLAYLIST_IMAGE_DIR);
        if (!imageDir.exists()) {
            imageDir.mkdirs();
        }

        // Xử lý playlist image
        Part playlistImagePart = req.getPart("playlist-image");
        String imagePath = (playlistImagePart != null && playlistImagePart.getSize() > 0)
                ? saveFile(playlistImagePart, imageDir, PLAYLIST_IMAGE_DIR)
                : null;

        if (name == null || imagePath == null) {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            resp.getWriter().write("{\"error\": \"Missing required fields\"}");
            return;
        }

        Playlist playlist = new Playlist();
        playlist.setName(name);
        playlist.setImage(imagePath);

        playlistService.addPlaylist(playlist);

        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        resp.setStatus(HttpServletResponse.SC_CREATED);
        resp.getWriter().write("{\"message\": \"Playlist uploaded successfully\"}");
    }

    private String saveFile(Part filePart, File uploadDir, String baseDir) throws IOException {
        if (filePart == null || filePart.getSize() == 0) {
            return null;
        }

        // Tạo thư mục nếu chưa tồn tại
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }

        // Lấy tên file với timestamp để tránh trùng
        String fileName = UUID.randomUUID().toString() + "_" + filePart.getSubmittedFileName();
        File file = new File(uploadDir, fileName); // Tạo file mới trong thư mục

        filePart.write(file.getAbsolutePath()); // Lưu file vào thư mục

        // Trả về đường dẫn tương đối (sử dụng baseDir để phân biệt ảnh và nhạc)
        return "." + baseDir + "/" + fileName;
    }

    @Override
    protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setCharacterEncoding("UTF-8");
        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        String playlistIdParam = req.getParameter("playlistId");

        if (playlistIdParam == null) {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            resp.getWriter().write("{\"error\": \"Missing playlist ID\"}");
            return;
        }

        int playlistId;
        try {
            playlistId = Integer.parseInt(playlistIdParam);
        } catch (NumberFormatException e) {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            resp.getWriter().write("{\"error\": \"Invalid playlist ID\"}");
            return;
        }

        Playlist playlist = playlistService.getPlaylistById(playlistId);
        if (playlist == null) {
            resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
            resp.getWriter().write("{\"error\": \"Playlist not found\"}");
            return;
        }

        String name = req.getParameter("name");

        if (name != null) {
            playlist.setName(name);
        }

        // Xử lý ảnh mới (nếu có)
        Part playlistImagePart = req.getPart("playlist-image");
        if (playlistImagePart != null && playlistImagePart.getSize() > 0) {
            String oldImagePath = Paths.get(ROOT_DIR, playlist.getImage().replaceFirst("^\\.\\/", "")).normalize().toString();
            File oldImageFile = new File(oldImagePath);
            if (oldImageFile.exists() && oldImageFile.isFile()) {
                oldImageFile.delete();
            }

            File imageDir = new File(ROOT_DIR + PLAYLIST_IMAGE_DIR);
            String imagePath = saveFile(playlistImagePart, imageDir, PLAYLIST_IMAGE_DIR);
            playlist.setImage(imagePath);
        }

        playlistService.updatePlaylist(playlist);

        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        resp.setStatus(HttpServletResponse.SC_OK);
        resp.getWriter().write("{\"message\": \"Playlist updated successfully\"}");
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String playlistIdParam = req.getParameter("playlistId");

        if (playlistIdParam == null) {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            resp.getWriter().write("{\"error\": \"Missing playlist ID\"}");
            return;
        }

        int playlistId;
        try {
            playlistId = Integer.parseInt(playlistIdParam);
        } catch (NumberFormatException e) {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            resp.getWriter().write("{\"error\": \"Invalid playlist ID\"}");
            return;
        }

        Playlist playlist = playlistService.getPlaylistById(playlistId);
        if (playlist == null) {
            resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
            resp.getWriter().write("{\"error\": \"Playlist not found\"}");
            return;
        }

        // Xóa file ảnh và file nhạc trên server
        if (playlist.getImage() != null) {
            String imagePath = Paths.get(ROOT_DIR, playlist.getImage().replaceFirst("^\\.\\/", "")).normalize().toString();
            File imageFile = new File(imagePath);
            if (imageFile.exists() && imageFile.isFile()) {
                imageFile.delete();
            }
        }

        playlistService.deletePlaylist(playlistId);

        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        resp.setStatus(HttpServletResponse.SC_OK);
        resp.getWriter().write("{\"message\": \"Playlist deleted successfully\"}");
    }
}
