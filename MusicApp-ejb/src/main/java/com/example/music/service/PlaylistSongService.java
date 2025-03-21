package com.example.music.service;

import com.example.music.entity.Playlist;
import com.example.music.entity.PlaylistSong;
import com.example.music.entity.Song;
import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.TypedQuery;
import java.util.List;

@Stateless
public class PlaylistSongService {

    @PersistenceContext(unitName = "MusicAppPU")
    private EntityManager em;

    public void addSongToPlaylist(Integer playlistId, Integer songId) {
        Playlist playlist = em.find(Playlist.class, playlistId);
        Song song = em.find(Song.class, songId);

        PlaylistSong playlistSong = new PlaylistSong(song, playlist);
        em.persist(playlistSong);
    }

    public void removeSongFromPlaylist(Integer playlistId, Integer songId) {
        TypedQuery<PlaylistSong> query = em.createQuery(
                "SELECT ps FROM PlaylistSong ps WHERE ps.playlist.id = :playlistId AND ps.song.id = :songId",
                PlaylistSong.class
        );
        query.setParameter("playlistId", playlistId);
        query.setParameter("songId", songId);

        List<PlaylistSong> results = query.getResultList();
        if (!results.isEmpty()) {
            PlaylistSong playlistSong = em.merge(results.get(0)); // Merge trước khi xóa
            em.remove(playlistSong);
        } else {
            throw new IllegalArgumentException("Bài hát không tồn tại trong playlist!");
        }
    }

}
