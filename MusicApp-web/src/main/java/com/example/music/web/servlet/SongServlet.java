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
import java.util.Arrays;

@WebServlet("/song")
public class SongServlet extends HttpServlet {

    @EJB
    private SongService songService;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");

        String playlistIdParam = req.getParameter("playlistId");
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
        } else {
            songs = songService.getAllSongs();
        }

        // Sử dụng Gson để chuyển đổi danh sách bài hát thành JSON
        Gson gson = new Gson();
        String json = gson.toJson(songs);

        resp.getWriter().write(json);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String name = req.getParameter("name");
        String singer = req.getParameter("singer");
        String duration = req.getParameter("duration");
        String path = req.getParameter("path");
        String image = req.getParameter("image");
//        int playlistId = Integer.parseInt(req.getParameter("playlistId"));

        Song song = new Song();
        song.setName(name);
        song.setSinger(singer);
        song.setDuration(duration);
        song.setPath(path);
        song.setImage(image);
//        song.setPlaylistId(playlistId);

        songService.addSong(song);
        resp.sendRedirect("/songs");
    }
}
