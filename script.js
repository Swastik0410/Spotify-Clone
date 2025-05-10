console.log("Welcome to Spotify");
let audioElement=new Audio('1.mp3');
let songIndex=0;
let masterplay=document.querySelector("#masterplay");
let myProgressBar=document.querySelector("#myprogressbar");
let songItems=Array.from(document.querySelectorAll('.songItem'));
//audioElement.play();
let songs=[
    {songname:'Runaway',filepath:'1.mp3',coverpath:'cover1.jpg'},
    {songname:'Safe',filepath:'2.mp3',coverpath:'cover2.jpg'},
    {songname:'Edge',filepath:'3.mp3',coverpath:'cover3.jpg'},
    {songname:'Collapse',filepath:'4.mp3',coverpath:'cover4.jpg'},
    {songname:'Life on its Own',filepath:'5.mp3',coverpath:'cover5.jpg'},
    {songname:'Never Ever',filepath:'6.mp3',coverpath:'cover6.jpg'},
    {songname:'Always the poet',filepath:'7.mp3',coverpath:'cover7.jpg'}
        
]
songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songname;

})

//Hanlde play/pause click
masterplay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterplay.classList.remove('fa-solid', 'fa-circle-play');
        masterplay.classList.add('fa-solid', 'fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-solid', 'fa-circle-pause');
        masterplay.classList.add('fa-solid', 'fa-circle-play');
    }
});



audioElement.addEventListener("timeupdate",()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeallplays=()=>{
    
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
    })
})
