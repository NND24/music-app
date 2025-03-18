package com.example.music.web.api;

import com.example.music.entity.Song;
import com.example.music.service.SongService;

import jakarta.ejb.EJB;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/songs")
public class SongResource {

    @EJB
    private SongService songService;

    // Lấy tất cả bài hát
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllSongs() {
        List<Song> songs = songService.getAllSongs();
        return Response.ok(songs).build();
    }

    // Lấy một bài hát theo ID
    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getSongById(@PathParam("id") Integer id) {
        Song song = songService.getSongById(id);
        if (song != null) {
            return Response.ok(song).build();
        } else {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
    }

    // Thêm bài hát mới
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response addSong(Song song) {
        songService.addSong(song);
        return Response.status(Response.Status.CREATED).entity(song).build();
    }

    // Sửa bài hát
    @PUT
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateSong(@PathParam("id") Integer id, Song song) {
        Song existingSong = songService.getSongById(id);
        if (existingSong == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        existingSong.setName(song.getName());
        existingSong.setDuration(song.getDuration());
        existingSong.setPath(song.getPath());
        existingSong.setImage(song.getImage());
        songService.updateSong(existingSong);
        return Response.ok(existingSong).build();
    }

    // Xóa bài hát
    @DELETE
    @Path("/{id}")
    public Response deleteSong(@PathParam("id") Integer id) {
        Song existingSong = songService.getSongById(id);
        if (existingSong == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        songService.deleteSong(id);
        return Response.status(Response.Status.NO_CONTENT).build();
    }
}
