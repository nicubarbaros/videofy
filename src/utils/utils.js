"use strict";

const formatText = (title) => {
  return title.split('.').shift();
}

const secToMin = (time) =>{  

    // ~~ shortcut to Math.floor
    let min = ~~(time / 60);
    let sec = time % 60;

    let formatedTime = "";
    formatedTime += "" + min + ":" + (sec < 10 ? "0" : "");
    formatedTime += "" + sec;

    return formatedTime;
}

export { formatText, secToMin }