const music = new Audio('audio/don.mp3');
const play = document.getElementById('play');

play.addEventListener('click', function(){
    if(play.textContent == "だッ...!"){
      play.innerHTML ="お前の名前は..";
      music.pause();
      music.currentTime = 0;
    }else{
      play.innerHTML = "だッ...!";
      music.play();
    }
  });
