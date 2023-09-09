let songs=[{
    name:'song 1',
    title:'Anbin Siharam',
    year:'2015',
    category:'Thyana',
    path:'./VBS2015/19 Anbin siharam.mp3',
    author:'KK Diocise',
    cover:'./assest/vbs 2015/1.png'
},{
    name:"song 2",
    title:"Unakai Maritha",
    path:"./VBS2015/20 Unakkaai mariththa.mp3",
    category:'Thyana',
    author:"KK Diocise",
    cover:"./assest/vbs 2015/2.png",
    year:'2015'
},{
    name:"song 3",
    title:"Enthan uzhathil",
    path:"/VBS2015/21 Enthan uzhzhaththil.mp3",
    category:'Thyana',
    author:"KK Diocise",
    cover:"./assest/vbs 2015/3.png",
    year:'2015'
}
,{
    name:"song 4",
    title:"01 Uruthiyayiru",
    path:"/VBS 2016/01 Uruthiyairu.mp3",
    author:"KK Diocise",
    cover:"assest/2016/1.png",
    year:'2016'
},{
    name:"song 5",
    title:"02 Kalangamilla",
    path:"/VBS 2016/02 Kalankamilla.mp3",
    author:"KK Diocise",
    cover:"assest/2016/2.png",
    year:'2016'
},
{
    name:'song 6',
    title:'03 Abraham',
    year:'2016',
    category:'Thyana',
    path:'/VBS 2016/03 Abraham.mp3',
    author:'KK Diocise',
    cover:'./assest/2016/3.png'
},{
    name:"song 7",
    title:"04 Kaatukulle",
    path:'/VBS 2016/04 Kaatukule.mp3',
    category:'Thyana',
    author:"KK Diocise",
    cover:'./assest/2016/4.png',
    year:'2016'
},{
    name:"song 8",
    title:"05 Jebipom",
    path:"/VBS 2016/05 Jebipom.mp3",
    category:'Thyana',
    author:"KK Diocise",
    cover:'./assest/2016/5.png',
    year:'2016'
}
,{
    name:"song 9",
    title:"06 Odu",
    path:"/VBS 2016/06 Odu.mp3",
    author:"KK Diocise",
    cover:'./assest/2016/6.png',
    year : '2016'
},{
    name:"song 10",
    title:"07 Katha Kelu",
    path:"/VBS 2016/07 Kadhakelu.mp3",
    author:"KK Diocise",
    cover:'./assest/2016/7.png',
    year : '2016'
},{
    name:"song 11",
    title:"08 Thulli odi",
    path:"/VBS 2016/08 Thulli odi.mp3",
    author:"KK Diocise",
    cover:'./assest/2016/8.png',
    year:'2016'
},{
    name:"song 12",
    title:"09 Anbu",
    path:"/VBS 2016/09 Anbu.mp3",
    author:"KK Diocise",
    cover:'./assest/2016/9.png',
    year:'2016'
},
{
    name:'song 13',
    title:'10 Vaazhkai',
    year:'2016',
    category:'Thyana',
    path:'/VBS 2016/10 Vaazhkai.mp3',
    author:'KK Diocise',
    cover:'./assest/2016/10.png'
},{
    name:"song 14",
    title:"11 Naavu",
    path:'/VBS 2016/11 Naavu.mp3',
    category:'Thyana',
    author:"KK Diocise",
    cover:'./assest/2016/11.png',
    year:'2016'
},{
    name:"song 15",
    title:"12 Jeevantae",
    path:"/VBS 2016/12 Jeevantae.mp3",
    category:'Thyana',
    author:"KK Diocise",
    cover:'./assest/2016/12.png',
    year:'2016'
}
,{
    name:"song 16",
    title:"13 Chinna Siruvan",
    path:"/VBS 2016/13 Chinna.mp3",
    author:"KK Diocise",
    cover:'./assest/2016/13.png',
    year : '2016'
},{
    name:"song 17",
    title:"14 City Road",
    path:"/VBS 2016/14 City road.mp3",
    author:"KK Diocise",
    cover:'./assest/2016/14.png',
    year : '2016'
},{
    name:"song 18",
    title:"15 Vaanathula",
    path:"/VBS 2016/15 Vaanathula.mp3",
    author:"KK Diocise",
    cover:'./assest/2016/15.png',
    year:'2016'
},{
    name:"song 19",
    title:"16 Let Us",
    path:"/VBS 2016/16 Let Us.mp3",
    author:"KK Diocise",
    cover:'./assest/2016/16.png',
    year:'2016'
},
{
    name:'song 20',
    title:'Thayapararae',
    year:'2016',
    category:'17 Thyana',
    path:'/VBS 2016/17 Thayapararey.mp3',
    author:'KK Diocise',
    cover:'./assest/2016/17.png'
},{
    name:"song 21",
    title:"18 Varunthidum",
    path:'/VBS 2016/18 Varuntidum.mp3',
    category:'Thyana',
    author:"KK Diocise",
    cover:'./assest/2016/18.png',
    year:'2016'
},{
    name:"song 22",
    title:"19 Nimathi",
    path:"/VBS 2016/19 Nimathi.mp3",
    category:'Thyana',
    author:"KK Diocise",
    cover:'./assest/2016/19.png',
    year:'2016'
}
,{
    name:"song 23",
    title:"20 Calvary",
    path:"/VBS 2016/20 Calvary.mp3",
    author:"KK Diocise",
    cover:'./assest/2016/20.png',
    year : '2016'
},{
    name:"song 24",
    title:"21 Sugama",
    path:"/VBS 2016/21 Sugama.mp3",
    author:"KK Diocise",
    cover:'./assest/2016/21.png',
    year : '2016'
}
]



let currentMusic = 0;

 const music = document.querySelector('#audio');
 const seekBar = document.querySelector('.seek-bar');
 const songName = document.querySelector('.nusic-name');
const artistName = document.querySelector('.artist-name');
 const disk = document.querySelector('.disk');
 const currentTime = document.querySelector('.current-time');
const musicDuration= document.querySelector('.song-duration');
const playBtn = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.forward-btn'); 
const backwardBtn = document.querySelector('.backward-btn');
const releaseYear = document.querySelector('.release-year');

playBtn.addEventListener('click',()=>{
    if(playBtn.className.includes('pause')){
        music.play();
    }
    else{
        music.pause();
    }
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
})

const setMusic = (i) => {
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.title;
    artistName.innerHTML = song.author;
    releaseYear.innerHTML = song.year;
    disk.style.backgroundImage = `url('${song.cover}')`;

    currentTime.innerHTML = '00.00';
    setTimeout(() => {
        seekBar.max = music.duration;
        musicDuration.innerHTML = formatTime(music.duration);
        
    }, 300);
}

setMusic(0);

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if(min < 10){
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if(sec < 10){
        sec =`0${sec}`;
    }
    return `${min} : ${sec}`;
}

const playMusic = ()=> {
    music.play();
    playBtn.classList.remove('pause');
    disk.classList.add('play');
}

setInterval(()=>{
seekBar.value =music.currentTime;
currentTime.innerHTML = formatTime(music.currentTime);
if (Math.floor(music.currentTime)== Math.floor(seekBar.max)) {
    forwardBtn.click();
}
},500)

seekBar.addEventListener('change',()=>{
    music.currentTime=seekBar.value
})

forwardBtn.addEventListener('click',()=>{
    if(currentMusic >= songs.length -1){
        currentMusic =0;
    } else {
        currentMusic ++;
    }
    setMusic(currentMusic);
    playMusic();
})

backwardBtn.addEventListener('click',()=>{
    if(currentMusic <= 0){
        currentMusic =songs.length-1;
    } else {
        currentMusic --;
    }
    setMusic(currentMusic);
    playMusic();
})