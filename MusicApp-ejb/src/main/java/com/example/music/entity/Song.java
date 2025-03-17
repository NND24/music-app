package com.example.music.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Song")
public class Song implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "duration")
    private String duration;

    @Column(name = "path")
    private String path;

    @Column(name = "image")
    private String image;

    @ManyToMany
    @JoinTable(
            name = "SongPlaylist",
            joinColumns = @JoinColumn(name = "songId"),
            inverseJoinColumns = @JoinColumn(name = "playlistId")
    )
    private List<Playlist> playlistList = new ArrayList<>();

    @ManyToMany
    @JoinTable(
            name = "SongSinger",
            joinColumns = @JoinColumn(name = "songId"),
            inverseJoinColumns = @JoinColumn(name = "singerId")
    )
    private List<Singer> singerList = new ArrayList<>();

    // Constructor mặc định
    public Song() {
    }

    // Constructor đầy đủ
    public Song(String name, String duration, String path, String image) {
        this.name = name;
        this.duration = duration;
        this.path = path;
        this.image = image;
    }

    // Getter và Setter
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<Playlist> getPlaylistList() {
        return playlistList;
    }

    public void setPlaylistList(List<Playlist> playlistList) {
        this.playlistList = playlistList;
    }

    public List<Singer> getSingerList() {
        return singerList;
    }

    public void setSingerList(List<Singer> singerList) {
        this.singerList = singerList;
    }

    @Override
    public String toString() {
        return "Song{"
                + "id=" + id
                + ", name='" + name + '\''
                + ", duration='" + duration + '\''
                + ", path='" + path + '\''
                + ", image='" + image + '\''
                + '}';
    }
}
