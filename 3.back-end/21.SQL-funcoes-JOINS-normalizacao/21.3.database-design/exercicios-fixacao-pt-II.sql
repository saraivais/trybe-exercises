DROP SCHEMA IF EXISTS music_stuff;
CREATE SCHEMA music_stuff;
USE music_stuff;

-- Artist & genre are kinda independent i think~
-- then album, cause it depends on artist n genre
-- then songs cause it depends on album~

-- TABELAS NORMAIS (?)
CREATE TABLE artist (
	artist_id INT PRIMARY KEY AUTO_INCREMENT,
    artist_name VARCHAR(50) NOT NULL
);

CREATE TABLE genre (
	genre_id INT PRIMARY KEY AUTO_INCREMENT,
    genre_name VARCHAR(50) NOT NULL
);

CREATE TABLE album (
	album_id INT PRIMARY KEY AUTO_INCREMENT,
    album_name VARCHAR(50) NOT NULL,
	song_quantity INT NOT NULL
);

CREATE TABLE song (
	song_id INT PRIMARY KEY AUTO_INCREMENT,
	song_name VARCHAR(50) NOT NULL,
	length_seconds INT NOT NULL,
    album_id INT,
    FOREIGN KEY (album_id) REFERENCES album (album_id)
);

-- TABELAS N:N
CREATE TABLE genre_per_artist (
	genre_id INT,
    FOREIGN KEY (genre_id) REFERENCES genre (genre_id),
    artist_id INT,
    FOREIGN KEY (artist_id) REFERENCES artist (artist_id)	
);
-- SELECT * FROM genre_per_artist;

CREATE TABLE genre_per_album (
	genre_id INT,
    FOREIGN KEY (genre_id) REFERENCES genre (genre_id),
    album_id INT,
    FOREIGN KEY (album_id) REFERENCES album (album_id)
);
-- SELECT * FROM genre_per_album;

CREATE TABLE album_per_artist (
	album_id INT,
    FOREIGN KEY (album_id) REFERENCES album (album_id),
    artist_id INT,
    FOREIGN KEY (artist_id) REFERENCES artist (artist_id)
);
-- SELECT * FROM album_per_artist;