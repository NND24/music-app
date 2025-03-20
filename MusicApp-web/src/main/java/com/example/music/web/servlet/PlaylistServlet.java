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

@WebServlet("/playlist")
public class PlaylistServlet extends HttpServlet {

    @EJB
    private PlaylistService playlistService;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        List<Playlist> playlists = playlistService.getAllPlaylists();

        // Sử dụng Gson để chuyển đổi danh sách bài hát thành JSON
        Gson gson = new Gson();
        String json = gson.toJson(playlists);

        resp.getWriter().write(json);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String name = req.getParameter("name");
        String creator = req.getParameter("creator");
        String image = req.getParameter("image");

        Playlist playlist = new Playlist();
        playlist.setName(name);
        playlist.setCreator(creator);
        playlist.setImage(image);

        playlistService.addPlaylist(playlist);
        resp.sendRedirect("/songs");
    }
}
