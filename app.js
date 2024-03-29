const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};
/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////
// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

const printPlaylists = function() {
  console.log(`p01: ${library.playlists.p01.name} - ${library.playlists.p01.tracks.length} tracks`);
  console.log(`p02: ${library.playlists.p02.name} - ${library.playlists.p02.tracks.length} tracks`);
}

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

const printTracks = ((library) => {
  console.log(library.tracks.t01)
  console.log(library.tracks.t02)
  console.log(library.tracks.t03)
});

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let playlistSong = library.playlists[playlistId].tracks;
  console.log(library.playlists[playlistId])
  console.log(library.tracks[playlistSong[0]])
  console.log(library.tracks[playlistSong[1]])
}

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  const destination = library.playlists[playlistId]
  destination.push(trackId);
}

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
// adds a track to the library
const addTrack = function(name, artist, album) {
  let gid = generateUid();
  library.id = gid;
  library.id.name = name;
  library.id.artist = artist;
  library.id.album = album;
}

// adds a playlist to the library
const addPlaylist = function(name) {
  let gid = generateUid();
  library.playlists.id = gid;
  library.playslists.id.name = name;
}