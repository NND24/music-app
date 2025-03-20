package com.example.music.service;

import com.example.music.entity.Song;
import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import java.util.List;

@Stateless
public class SongService {

    @PersistenceContext(unitName = "MusicAppPU")
    private EntityManager em;

    public void addSong(Song song) {
        em.persist(song);
    }

    public void updateSong(Song song) {
        em.merge(song);
    }

    public void deleteSong(Integer id) {
        Song song = em.find(Song.class, id);
        if (song != null) {
            em.remove(song);
        }
    }

    public List<Song> getAllSongs() {
        return em.createQuery("SELECT s FROM Song s", Song.class).getResultList();
    }

    public Song getSongById(Integer id) {
        return em.find(Song.class, id);
    }

    public List<Song> getSongsByPlaylistId(Integer playlistId) {
        return em.createQuery(
                "SELECT s FROM Song s JOIN PlaylistSong ps ON ps.song = s WHERE ps.playlist.id = :playlistId", Song.class)
                .setParameter("playlistId", playlistId)
                .getResultList();
    }
}
