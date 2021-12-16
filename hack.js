let playlist = [
  {
    song: "lagu1.mp3"
  },
  {
    song: "lagu2.mp3"
  },
  {
    song: "lagu3.mp3"
  },
  {
    song: "lagu4.mp3"
  },
  ""
]

let musik = new Audio()
let index = 0

function generateMusic(){
  musik.src = playlist[index].song
  musik.play()
}

function nextMusic(){
  
  index++
  musik.src = playlist[index].song
  musik.play()

  if (index === playlist.length -1){
    alert("HORE")
  }
}


