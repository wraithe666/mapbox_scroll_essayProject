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
    map.setLayoutProperty('events-interaction-partition', 'visibility', 'none');
    map.setLayoutProperty('events-interaction-postpartition', 'visibility', 'none');
    map.setLayoutProperty('events-interaction-longpartition', 'visibility', 'none');
    map.setLayoutProperty('events-interaction-prepartition', 'visibility', 'none');

    // if (map.getLayoutProperty('events-interaction-prepartition', 'visibility') === 'none' ) {
    //     map.setLayoutProperty('events-interaction-prepartition', 'visibility', 'visible');
    // }
  
});



const chapters = {
'part_1': {
bearing:0,
center: [77.0688997, 28.5272803],
zoom: 3,
pitch: 0
},
'part_2': {
duration: 7000,
center: [82.53, 29.04],
bearing: 0,
zoom: 4,
pitch: 0
},
'part_3': {
center: [76.629, 31.988], 
zoom: 4,
speed: .25,
pitch: 20
},
'part_4': {

center: [74.8736788, 31.6343083],
zoom: 3,
pitch: 20,
speed: .5
},
'part_5': {

center: [77.206376, 28.696161],
zoom: 16.18,
pitch: 10,
speed: 1,
curve:1
},
'part_6': {

center: [77.0688997, 28.5272803],
zoom: 3
},
'part_7': {

    center: [77.0688997, 28.5272803],
    zoom: 3
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

if (chapterName == 'part_1'){
    map.setLayoutProperty('events-interaction-partition', 'visibility', 'none');
    map.setLayoutProperty('events-interaction-postpartition', 'visibility', 'none');
    map.setLayoutProperty('events-interaction-longpartition', 'visibility', 'none');
    map.setLayoutProperty('events-interaction-prepartition', 'visibility', 'none');}

else if (chapterName == 'part_2'){
    map.setLayoutProperty('events-interaction-partition', 'visibility', 'none');
    map.setLayoutProperty('events-interaction-postpartition', 'visibility', 'none');
    map.setLayoutProperty('events-interaction-longpartition', 'visibility', 'none');
    map.setLayoutProperty('events-interaction-prepartition', 'visibility', 'visible');
 }
else if (chapterName == 'part_3'){
    map.setLayoutProperty('events-interaction-partition', 'visibility', 'visible');
    map.setLayoutProperty('events-interaction-postpartition', 'visibility', 'none');
    map.setLayoutProperty('events-interaction-longpartition', 'visibility', 'none');
    map.setLayoutProperty('events-interaction-prepartition', 'visibility', 'none');

}

else if (chapterName == 'part_4'){
    map.setLayoutProperty('events-interaction-partition', 'visibility', 'none');
    map.setLayoutProperty('events-interaction-postpartition', 'visibility', 'visible');
    map.setLayoutProperty('events-interaction-longpartition', 'visibility', 'none');
    map.setLayoutProperty('events-interaction-prepartition', 'visibility', 'none');

}

else if (chapterName == 'part_5'){
    map.setLayoutProperty('events-interaction-partition', 'visibility', 'none');
    map.setLayoutProperty('events-interaction-postpartition', 'visibility', 'visible');
    map.setLayoutProperty('events-interaction-longpartition', 'visibility', 'none');
    map.setLayoutProperty('events-interaction-prepartition', 'visibility', 'none');

}

else if (chapterName == 'part_6'){
    map.setLayoutProperty('events-interaction-partition', 'visibility', 'none');
    map.setLayoutProperty('events-interaction-postpartition', 'visibility', 'none');
    map.setLayoutProperty('events-interaction-longpartition', 'visibility', 'visible');
    map.setLayoutProperty('events-interaction-prepartition', 'visibility', 'none');

}

else if (chapterName == 'part_7'){
    map.setLayoutProperty('events-interaction-partition', 'visibility', 'visible');
    map.setLayoutProperty('events-interaction-postpartition', 'visibility', 'visible');
    map.setLayoutProperty('events-interaction-longpartition', 'visibility', 'visible');
    map.setLayoutProperty('events-interaction-prepartition', 'visibility', 'visible');

}
if (isElementOnScreen(chapterName)) {
setActiveChapter(chapterName);
break;
}
}
};
