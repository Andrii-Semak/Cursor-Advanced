let audio = new Audio();

document.body.addEventListener("keydown", function (e){
  delActive();        
  let addActive = "key" + e.code.substr(-1);
    if (document.querySelector(`.${addActive}`)) {
      document.querySelector(`.${addActive}`).classList.add("active");
      playSound(e);  
      audio.play();
    };       
});

function delActive() {
  document.querySelectorAll('div').forEach(div => div.classList.remove("active"));   
};

function playSound(e) {
  if (e.code == "KeyA") {
    audio.src = "sounds/amogus.mp3";
  };

  if (e.code == "KeyS") {
    audio.src = "sounds/better-call-saul.mp3";
  };

  if (e.code == "KeyD") {
    audio.src = "sounds/call-me-gus.mp3";
  };

  if (e.code == "KeyF") {
    audio.src = "sounds/dog-doin.mp3";
  };

  if (e.code == "KeyG") {
    audio.src = "sounds/electric-zoo.mp3";
  };

  if (e.code == "KeyH") {
    audio.src = "sounds/iluminati.mp3";
  };

  if (e.code == "KeyJ") {
    audio.src = "sounds/you-running.mp3";
  };
};