package com.example.music.web.servlet;

import com.example.music.service.PlaylistSongService;
import jakarta.ejb.EJB;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/playlistsong")
public class PlaylistSongServlet extends HttpServlet {

    @EJB
    private PlaylistSongService playlistSongService;

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int playlistId = Integer.parseInt(request.getParameter("playlistId"));
        int songId = Integer.parseInt(request.getParameter("songId"));

        playlistSongService.addSongToPlaylist(playlistId, songId);
        response.setStatus(HttpServletResponse.SC_OK);
        response.getWriter().write("Bài hát đã được thêm vào playlist!");
    }

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int playlistId = Integer.parseInt(request.getParameter("playlistId"));
        int songId = Integer.parseInt(request.getParameter("songId"));

        playlistSongService.removeSongFromPlaylist(playlistId, songId);
        response.setStatus(HttpServletResponse.SC_OK);
        response.getWriter().write("Bài hát đã được xóa khỏi playlist!");
    }
}
