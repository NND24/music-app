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

@WebServlet("/song")
public class SongServlet extends HttpServlet {

    @EJB
    private SongService songService;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        List<Song> songs = songService.getAllSongs();
        System.out.println("songs: " + songs);
        req.setAttribute("songs", songs);
        req.getRequestDispatcher("songs.jsp").forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("doPost: SongServlet is running...");
        String name = req.getParameter("name");
        String duration = req.getParameter("duration");
        String path = req.getParameter("path");
        String image = req.getParameter("image");

        Song song = new Song();
        song.setName(name);
        song.setDuration(duration);
        song.setPath(path);
        song.setImage(image);

        songService.addSong(song);
        resp.sendRedirect("/songs");
    }
}
