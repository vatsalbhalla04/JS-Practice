// getting all the imp elements : 
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress =  player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay(){
    // Traditional conditional statement:
    // if(video.paused){
    //     video.play();
    // }else{
    //     video.pause();
    // }

    // Or using the Ternary + Bracket Notation:
    const method = video.paused ? 'play':'pause';
    video[method]();// it calls the method using bracket notation: video['play']() or video['pause']()
}

function updateButton(){
    const icon = this.paused ? '▶️' : '⏸️';
    toggle.textContent = icon;  
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate(){
    video[this.name] = this.value;
    // console.log(this.name);
    // console.log(this.value);
}

function videoProgressBar() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime
}


// Video PLay and pause: 
video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton)
toggle.addEventListener('click',togglePlay)
video.addEventListener('pause',updateButton)

// Skip : 
toggle.addEventListener('click',togglePlay);

skipButtons.forEach(skipbut =>skipbut.addEventListener('click',skip));

//Ranges:
ranges.forEach(range => range.addEventListener('change',handleRangeUpdate));

ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));

// Handling the video progress bar : 
video.addEventListener('timeupdate', videoProgressBar);
progress.addEventListener('click',scrub)
progress.addEventListener('mousemove',()=>mousedown && scrub(e));
progress.addEventListener('mousedown',()=> mousedown = true)
progress.addEventListener('mouseup',()=> mouseup = true)


