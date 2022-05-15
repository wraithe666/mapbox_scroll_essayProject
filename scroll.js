mapboxgl.accessToken = 'pk.eyJ1IjoiYXl1c2htYW5tYXBwZXIiLCJhIjoiY2wxdzY2bTk5MGc2ZDNqcXA0ZXhxamkzaSJ9.bOL5UiuUc3Snygc4cA9EVA';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/ayushmanmapper/cl1w80hc8003714pi1fpybttt/',
center: [77.0688997, 28.5272803],
zoom: 3,
bearing: 0,
pitch: 0
});

//This is all the stuff that runs on the first load of the map.
map.on('load', () => {
    //Hide all presentation layers
    //This demo uses three specific layers. I want to hide them initially so I can reveal them piece meal.
    map.setLayoutProperty('events-post', 'visibility', 'none');
    map.setLayoutProperty('events-prepart', 'visibility', 'none');
    map.setLayoutProperty('events-interaction-partition', 'visibility', 'none');
  

const chapters = {
'part_1': {
bearing:0,
center: [77.0688997, 28.5272803],
zoom: 3,
pitch: 0
},
'part_2': {
duration: 7000,
center: [74.3141829, 31.5656822],
bearing: 0,
zoom: 10,
pitch: 0
},
'part_3': {
bearing: 45,
center: [74.3383, 31.5767],
zoom: 13,
speed: 1,
pitch: 50
},
'part_4': {
bearing: 45,
center: [74.8736788, 31.6343083],
zoom: 14,
pitch: 65,
speed: .5
},
'part_5': {
bearing: 180,
center: [77.1835, 28.6239],
zoom: 11,
pitch: 10,
speed: 1,
curve:1
},
'part_6': {
bearing: 25,
center: [77.0688997, 28.5272803],
zoom: 7
}
};

let activeChapterName = 'part_1';
function setActiveChapter(chapterName) {
if (chapterName === activeChapterName) return;

map.flyTo(chapters[chapterName]);

document.getElementById(chapterName).classList.add('active');
document.getElementById(activeChapterName).classList.remove('active');

activeChapterName = chapterName;
}

function isElementOnScreen(id) {
const element = document.getElementById(id);
const bounds = element.getBoundingClientRect();
return bounds.top < window.innerHeight && bounds.bottom > 0;
}

// On every scroll event, check which element is on screen
window.onscroll = () => {
for (const chapterName in chapters) {
if (isElementOnScreen(chapterName)) {
setActiveChapter(chapterName);
break;
}
}
};
