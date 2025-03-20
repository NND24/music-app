package com.example.music.service;

import com.example.music.entity.Playlist;
import jakarta.ejb.Stateless;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import java.util.List;

@Stateless
public class PlaylistService {

    @PersistenceContext(unitName = "MusicAppPU")
    private EntityManager em;

    public void addPlaylist(Playlist playlist) {
        em.persist(playlist);
    }

    public void updatePlaylist(Playlist playlist) {
        em.merge(playlist);
    }

    public void deletePlaylist(Integer id) {
        Playlist playlist = em.find(Playlist.class, id);
        if (playlist != null) {
            em.remove(playlist);
        }
    }

    public List<Playlist> getAllPlaylists() {
        return em.createQuery("SELECT p FROM Playlist p", Playlist.class).getResultList();
    }

    public Playlist getPlaylistById(Integer id) {
        return em.find(Playlist.class, id);
    }
}
