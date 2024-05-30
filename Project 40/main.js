function make_album(artistName, albumtitle, track) {
    var music_album = {
        artistName: artistName,
        albumtitle: albumtitle,
    };
    if (track) {
        music_album.track = track;
    }
    return music_album;
}
console.log(make_album("Atif Aslam", "Jaal paari"));
console.log(make_album("Ali Zafar", "Jhoom"));
console.log(make_album("Arjit Singh", "Yariyan", 15));
