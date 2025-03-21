package com.example.music.web.servlet;

import com.example.music.entity.Song;
import com.example.music.service.SongService;
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
@WebServlet("/song")
public class SongServlet extends HttpServlet {

    @EJB
    private SongService songService;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        String playlistIdParam = req.getParameter("playlistId");
        String songIdParam = req.getParameter("songId");

        List<Song> songs;

        if (playlistIdParam != null) {
            try {
                Integer playlistId = Integer.valueOf(playlistIdParam);
                songs = songService.getSongsByPlaylistId(playlistId);
            } catch (NumberFormatException e) {
                resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                resp.getWriter().write("{\"error\": \"Invalid playlistId\"}");
                return;
            }
        } else if (songIdParam != null) {
            try {
                Integer songId = Integer.valueOf(songIdParam);
                songs = songService.getSongsById(songId);
            } catch (NumberFormatException e) {
                resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                resp.getWriter().write("{\"error\": \"Invalid playlistId\"}");
                return;
            }
        } else {
            songs = songService.getAllSongs();
        }

        // Sử dụng Gson để chuyển đổi danh sách bài hát thành JSON
        Gson gson = new Gson();
        String json = gson.toJson(songs);

        resp.getWriter().write(json);
    }

    private static final String IMAGE_DIR = "/assets/image/music";
    private static final String MUSIC_DIR = "/assets/music";
    private static final String ROOT_DIR = "D:/Workspace/MusicApp/MusicApp-web/src/main/webapp";

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String name = req.getParameter("name");
        String singer = req.getParameter("singer");

        // Tạo thư mục nếu chưa tồn tại
        File imageDir = new File(ROOT_DIR + IMAGE_DIR);
        File musicDir = new File(ROOT_DIR + MUSIC_DIR);
        if (!imageDir.exists()) {
            imageDir.mkdirs();
        }
        if (!musicDir.exists()) {
            musicDir.mkdirs();
        }

        // Xử lý song image
        Part songImagePart = req.getPart("song-image");
        String imagePath = (songImagePart != null && songImagePart.getSize() > 0)
                ? saveFile(songImagePart, imageDir, IMAGE_DIR)
                : null;

        // Xử lý song file
        Part songFilePart = req.getPart("song-file");
        String songFilePath = (songFilePart != null && songFilePart.getSize() > 0)
                ? saveFile(songFilePart, musicDir, MUSIC_DIR)
                : null;

        if (name == null || singer == null || imagePath == null || songFilePath == null) {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            resp.getWriter().write("{\"error\": \"Missing required fields\"}");
            return;
        }

        Song song = new Song();
        song.setName(name);
        song.setSinger(singer);
        song.setPath(songFilePath);
        song.setImage(imagePath);

        songService.addSong(song);

        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        resp.setStatus(HttpServletResponse.SC_CREATED);
        resp.getWriter().write("{\"message\": \"Song uploaded successfully\"}");
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
        String songIdParam = req.getParameter("songId");

        if (songIdParam == null) {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            resp.getWriter().write("{\"error\": \"Missing song ID\"}");
            return;
        }

        int songId;
        try {
            songId = Integer.parseInt(songIdParam);
        } catch (NumberFormatException e) {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            resp.getWriter().write("{\"error\": \"Invalid song ID\"}");
            return;
        }

        Song song = songService.getSongById(songId);
        if (song == null) {
            resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
            resp.getWriter().write("{\"error\": \"Song not found\"}");
            return;
        }

        String name = req.getParameter("name");
        String singer = req.getParameter("singer");

        if (name != null) {
            song.setName(name);
        }
        if (singer != null) {
            song.setSinger(singer);
        }

        // Xử lý ảnh mới (nếu có)
        Part songImagePart = req.getPart("song-image");
        if (songImagePart != null && songImagePart.getSize() > 0) {
            String oldImagePath = Paths.get(ROOT_DIR, song.getImage().replaceFirst("^\\.\\/", "")).normalize().toString();
            File oldImageFile = new File(oldImagePath);
            if (oldImageFile.exists() && oldImageFile.isFile()) {
                oldImageFile.delete();
            }

            File imageDir = new File(ROOT_DIR + IMAGE_DIR);
            String imagePath = saveFile(songImagePart, imageDir, IMAGE_DIR);
            song.setImage(imagePath);

        }

        // Xử lý file nhạc mới (nếu có)
        Part songFilePart = req.getPart("song-file");
        if (songFilePart != null && songFilePart.getSize() > 0) {
            String oldSongFilePath = Paths.get(ROOT_DIR, song.getPath().replaceFirst("^\\.\\/", "")).normalize().toString();
            File oldSongFile = new File(oldSongFilePath);
            if (oldSongFile.exists() && oldSongFile.isFile()) {
                oldSongFile.delete();
            }

            File musicDir = new File(ROOT_DIR + MUSIC_DIR);
            String songFilePath = saveFile(songFilePart, musicDir, MUSIC_DIR);
            song.setPath(songFilePath);
        }

        songService.updateSong(song);

        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        resp.setStatus(HttpServletResponse.SC_OK);
        resp.getWriter().write("{\"message\": \"Song updated successfully\"}");
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String songIdParam = req.getParameter("songId");

        if (songIdParam == null) {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            resp.getWriter().write("{\"error\": \"Missing song ID\"}");
            return;
        }

        int songId;
        try {
            songId = Integer.parseInt(songIdParam);
        } catch (NumberFormatException e) {
            resp.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            resp.getWriter().write("{\"error\": \"Invalid song ID\"}");
            return;
        }

        Song song = songService.getSongById(songId);
        if (song == null) {
            resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
            resp.getWriter().write("{\"error\": \"Song not found\"}");
            return;
        }

        // Xóa file ảnh và file nhạc trên server
        if (song.getImage() != null) {
            String imagePath = Paths.get(ROOT_DIR, song.getImage().replaceFirst("^\\.\\/", "")).normalize().toString();
            File imageFile = new File(imagePath);
            if (imageFile.exists() && imageFile.isFile()) {
                imageFile.delete();
            }
        }
        if (song.getPath() != null) {
            String songFilePath = Paths.get(ROOT_DIR, song.getPath().replaceFirst("^\\.\\/", "")).normalize().toString();
            File songFile = new File(songFilePath);
            if (songFile.exists() && songFile.isFile()) {
                songFile.delete();
            }
        }

        songService.deleteSong(songId);

        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        resp.setStatus(HttpServletResponse.SC_OK);
        resp.getWriter().write("{\"message\": \"Song deleted successfully\"}");
    }

}
