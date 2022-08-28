const sounds = [
  'neptunesound', 
  'uranussound', 
  'saturnsound', 
  'jupitersound', 
  'marssound', 
  'earthsound', 
  'venussound', 
  'mercurysound'
];

sounds.forEach((sound) => {

});

// sunsound
const sunBtn = document.getElementById('sunbtn');
let sunSound = document.getElementById('sunsound');
var isPlayingSun = false;
sunBtn.addEventListener('click', togglePlaySun);
function togglePlaySun() {
  isPlayingSun ? sunSound.pause() : sunSound.play();
};
sunSound.onplaying = function() {
  isPlayingSun = true;
};
sunSound.onpause = function() {
  isPlayingSun = false;
};
// sunsound END


// neptunesound
const neptunBtn = document.getElementById('neptunbtn');
let neptuneSound = document.getElementById('neptunesound');
var isPlayingNeptune = false;
neptunBtn.addEventListener('click', togglePlayNeptune);
function togglePlayNeptune() {
  isPlayingNeptune ? neptuneSound.pause() : neptuneSound.play();
};
neptuneSound.onplaying = function() {
  isPlayingNeptune = true;
};
neptuneSound.onpause = function() {
  isPlayingNeptune = false;
};
// neptunesound END


// // uranussound
const uranusBtn = document.getElementById('uranusbtn');
let uranusSound = document.getElementById('uranussound');
var isPlayingUranus = false;
uranusBtn.addEventListener('click', togglePlayUranus);
function togglePlayUranus() {
  isPlayingUranus ? uranusSound.pause() : uranusSound.play();
};
uranusSound.onplaying = function() {
  isPlayingUranus = true;
};
uranusSound.onpause = function() {
  isPlayingUranus = false;
};
// // uranussound END


// // saturnsound
const saturnBtn = document.getElementById('saturnbtn');
let saturnSound = document.getElementById('saturnsound');
var isPlayingSaturn = false;
saturnBtn.addEventListener('click', togglePlaySaturn);
function togglePlaySaturn() {
  isPlayingSaturn ? saturnSound.pause() : saturnSound.play();
};
saturnSound.onplaying = function() {
  isPlayingSaturn = true;
};
saturnSound.onpause = function() {
  isPlayingSaturn = false;
};
// // saturnsound END


// // jupitersound
const jupiterBtn = document.getElementById('jupiterbtn');
let jupiterSound = document.getElementById('jupitersound');
var isPlayingJupiter = false;
jupiterBtn.addEventListener('click', togglePlayJupiter);
function togglePlayJupiter() {
  isPlayingJupiter ? jupiterSound.pause() : jupiterSound.play();
};
jupiterSound.onplaying = function() {
  isPlayingJupiter = true;
};
jupiterSound.onpause = function() {
  isPlayingJupiter = false;
};
// // jupitersound END


// // marssound
const marsBtn = document.getElementById('marsbtn');
let marsSound = document.getElementById('marssound');
var isPlayingMars = false;
marsBtn.addEventListener('click', togglePlayMars);
function togglePlayMars() {
  isPlayingMars ? marsSound.pause() : marsSound.play();
};
marsSound.onplaying = function() {
  isPlayingMars = true;
};
marsSound.onpause = function() {
  isPlayingMars = false;
};
// // marssound END


// // earthsound
const earthBtn = document.getElementById('earthbtn');
let earthSound = document.getElementById('earthsound');
var isPlayingEarth = false;
earthBtn.addEventListener('click', togglePlayEarth);
function togglePlayEarth() {
  isPlayingEarth ? earthSound.pause() : earthSound.play();
};
earthSound.onplaying = function() {
  isPlayingEarth = true;
};
earthSound.onpause = function() {
  isPlayingEarth = false;
};
// // earthsound END


// // venussound
const venusBtn = document.getElementById('venusbtn');
let venusSound = document.getElementById('venussound');
var isPlayingVenus = false;
venusBtn.addEventListener('click', togglePlayVenus);
function togglePlayVenus() {
  isPlayingVenus ? venusSound.pause() : venusSound.play();
};
venusSound.onplaying = function() {
  isPlayingVenus = true;
};
venusSound.onpause = function() {
  isPlayingVenus = false;
};
// // venussound END


// // mercurysound
const mercuryBtn = document.getElementById('mercurybtn');
let mercurySound = document.getElementById('mercurysound');
var isPlayingMercury = false;
mercuryBtn.addEventListener('click', togglePlayMercury);
function togglePlayMercury() {
  isPlayingMercury ? mercurySound.pause() : mercurySound.play();
};
mercurySound.onplaying = function() {
  isPlayingMercury = true;
};
mercurySound.onpause = function() {
  isPlayingMercury = false;
};
// mercurysound END



// info-buttons
var aboutNeptune = document.querySelector(".about-neptune");
var aboutUranus = document.querySelector(".about-uranus");
var aboutSaturn = document.querySelector(".about-saturn");
var aboutJupiter = document.querySelector(".about-jupiter");
var aboutMars = document.querySelector(".about-mars");
var aboutEarth = document.querySelector(".about-earth");
var aboutVenus = document.querySelector(".about-venus");
var aboutMercury = document.querySelector(".about-mercury");

var ringNeptune = document.querySelector('.ring-neptun');
var ringUranus = document.querySelector('.ring-uranus');
var ringSaturn = document.querySelector('.ring-saturn');
var ringJupiter = document.querySelector('.ring-jupiter');
var ringMars = document.querySelector('.ring-mars');
var ringEarth = document.querySelector('.ring-earth');
var ringVenus = document.querySelector('.ring-venus');
var ringMercury = document.querySelector('.ring-mercury');
var starSun = document.querySelector('.sun'); 

function overNeptuneFunction() {
  aboutNeptune.style.display = "block";
  ringUranus.style.opacity = '0.3';
  ringSaturn.style.opacity = '0.3';
  ringJupiter.style.opacity = '0.3';
  ringMars.style.opacity = '0.3';
  ringEarth.style.opacity = '0.3';
  ringUranus.style.opacity = '0.3';
  ringVenus.style.opacity = '0.3';
  ringMercury.style.opacity = '0.3';
  starSun.style.opacity = '0.3';
  ringNeptune.opacity = '1.0';
}
function outNeptuneFunction() {
  aboutNeptune.style.display = "none";
  ringUranus.style.opacity = '1.0';
  ringSaturn.style.opacity = '1.0';
  ringJupiter.style.opacity = '1.0';
  ringMars.style.opacity = '1.0';
  ringEarth.style.opacity = '1.0';
  ringUranus.style.opacity = '1.0';
  ringVenus.style.opacity = '1.0';
  ringMercury.style.opacity = '1.0';
  starSun.style.opacity = '1.0';
  ringNeptune.style.opacity = '1.0';
}

function overUranusFunction() {
  aboutUranus.style.display = "block";
  ringSaturn.style.opacity = '0.3';
  ringJupiter.style.opacity = '0.3';
  ringMars.style.opacity = '0.3';
  ringEarth.style.opacity = '0.3';
  ringVenus.style.opacity = '0.3';
  ringMercury.style.opacity = '0.3';
  starSun.style.opacity = '0.3';
  ringNeptune.style.opacity = '0.3';
  ringUranus.style.opacity = '1.0';
}
function outUranusFunction() {
  aboutUranus.style.display = "none";
  ringSaturn.style.opacity = '1.0';
  ringJupiter.style.opacity = '1.0';
  ringMars.style.opacity = '1.0';
  ringEarth.style.opacity = '1.0';
  ringVenus.style.opacity = '1.0';
  ringMercury.style.opacity = '1.0';
  starSun.style.opacity = '1.0';
  ringNeptune.style.opacity = '1.0';
  ringUranus.style.opacity = '1.0';
}

function overSaturnFunction() {
  aboutSaturn.style.display = "block";
  ringUranus.style.opacity = '0.3';
  ringSaturn.style.opacity = '1.0';
  ringJupiter.style.opacity = '0.3';
  ringMars.style.opacity = '0.3';
  ringEarth.style.opacity = '0.3';
  ringVenus.style.opacity = '0.3';
  ringMercury.style.opacity = '0.3';
  starSun.style.opacity = '0.3';
  ringNeptune.style.opacity = '0.3';
}
function outSaturnFunction() {
  aboutSaturn.style.display = "none";
  ringUranus.style.opacity = '1.0';
  ringSaturn.style.opacity = '1.0';
  ringJupiter.style.opacity = '1.0';
  ringMars.style.opacity = '1.0';
  ringEarth.style.opacity = '1.0';
  ringVenus.style.opacity = '1.0';
  ringMercury.style.opacity = '1.0';
  starSun.style.opacity = '1.0';
  ringNeptune.style.opacity = '1.0';
}

function overJupiterFunction() {
  aboutJupiter.style.display = "block";
  ringUranus.style.opacity = '0.3';
  ringSaturn.style.opacity = '0.3';
  ringJupiter.style.opacity = '1.0';
  ringMars.style.opacity = '0.3';
  ringEarth.style.opacity = '0.3';
  ringVenus.style.opacity = '0.3';
  ringMercury.style.opacity = '0.3';
  starSun.style.opacity = '0.3';
  ringNeptune.style.opacity = '0.3';
}
function outJupiterFunction() {
  aboutJupiter.style.display = "none";
  ringUranus.style.opacity = '1.0';
  ringSaturn.style.opacity = '1.0';
  ringJupiter.style.opacity = '1.0';
  ringMars.style.opacity = '1.0';
  ringEarth.style.opacity = '1.0';
  ringVenus.style.opacity = '1.0';
  ringMercury.style.opacity = '1.0';
  starSun.style.opacity = '1.0';
  ringNeptune.style.opacity = '1.0';
}

function overMarsFunction() {
  aboutMars.style.display = "block";
  ringUranus.style.opacity = '0.3';
  ringSaturn.style.opacity = '0.3';
  ringJupiter.style.opacity = '0.3';
  ringMars.style.opacity = '1.0';
  ringEarth.style.opacity = '0.3';
  ringVenus.style.opacity = '0.3';
  ringMercury.style.opacity = '0.3';
  starSun.style.opacity = '0.3';
  ringNeptune.style.opacity = '0.3';
}
function outMarsFunction() {
  aboutMars.style.display = "none";
  ringUranus.style.opacity = '1.0';
  ringSaturn.style.opacity = '1.0';
  ringJupiter.style.opacity = '1.0';
  ringMars.style.opacity = '1.0';
  ringEarth.style.opacity = '1.0';
  ringVenus.style.opacity = '1.0';
  ringMercury.style.opacity = '1.0';
  starSun.style.opacity = '1.0';
  ringNeptune.style.opacity = '1.0';
}

function overEarthFunction() {
  aboutEarth.style.display = "block";
  ringUranus.style.opacity = '0.3';
  ringSaturn.style.opacity = '0.3';
  ringJupiter.style.opacity = '0.3';
  ringMars.style.opacity = '0.3';
  ringEarth.style.opacity = '1.0';
  ringVenus.style.opacity = '0.3';
  ringMercury.style.opacity = '0.3';
  starSun.style.opacity = '0.3';
  ringNeptune.style.opacity = '0.3';
}
function outEarthFunction() {
  aboutEarth.style.display = "none";
  ringUranus.style.opacity = '1.0';
  ringSaturn.style.opacity = '1.0';
  ringJupiter.style.opacity = '1.0';
  ringMars.style.opacity = '1.0';
  ringEarth.style.opacity = '1.0';
  ringVenus.style.opacity = '1.0';
  ringMercury.style.opacity = '1.0';
  starSun.style.opacity = '1.0';
  ringNeptune.style.opacity = '1.0';
}

function overVenusFunction() {
  aboutVenus.style.display = "block";
  ringUranus.style.opacity = '0.3';
  ringSaturn.style.opacity = '0.3';
  ringJupiter.style.opacity = '0.3';
  ringMars.style.opacity = '0.3';
  ringEarth.style.opacity = '0.3';
  ringVenus.style.opacity = '1.0';
  ringMercury.style.opacity = '0.3';
  starSun.style.opacity = '0.3';
  ringNeptune.style.opacity = '0.3';
}
function outVenusFunction() {
  aboutVenus.style.display = "none";
  ringUranus.style.opacity = '1.0';
  ringSaturn.style.opacity = '1.0';
  ringJupiter.style.opacity = '1.0';
  ringMars.style.opacity = '1.0';
  ringEarth.style.opacity = '1.0';
  ringVenus.style.opacity = '1.0';
  ringMercury.style.opacity = '1.0';
  starSun.style.opacity = '1.0';
  ringNeptune.style.opacity = '1.0';
}

function overMercuryFunction() {
  aboutMercury.style.display = "block";
  ringUranus.style.opacity = '0.3';
  ringSaturn.style.opacity = '0.3';
  ringJupiter.style.opacity = '0.3';
  ringMars.style.opacity = '0.3';
  ringEarth.style.opacity = '0.3';
  ringVenus.style.opacity = '0.3';
  ringMercury.style.opacity = '1.0';
  starSun.style.opacity = '0.3';
  ringNeptune.style.opacity = '0.3';
}
function outMercuryFunction() {
  aboutMercury.style.display = "none";
  ringUranus.style.opacity = '1.0';
  ringSaturn.style.opacity = '1.0';
  ringJupiter.style.opacity = '1.0';
  ringMars.style.opacity = '1.0';
  ringEarth.style.opacity = '1.0';
  ringVenus.style.opacity = '1.0';
  ringMercury.style.opacity = '1.0';
  starSun.style.opacity = '1.0';
  ringNeptune.style.opacity = '1.0';
}
// info-buttons END
    
