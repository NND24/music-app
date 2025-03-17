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

    @Transactional
    public void addSong(Song song) {
        em.persist(song);
    }

    public List<Song> getAllSongs() {
        return em.createQuery("SELECT s FROM Song s", Song.class).getResultList();
    }
}
