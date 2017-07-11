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

const convertToMB = (bytes,decimals) => {
    if(bytes == 0) return '0 Bytes';
    let k = 1000,
        dm = decimals || 2,
        i = 2;
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm));
}


export { formatText, secToMin, convertToMB }