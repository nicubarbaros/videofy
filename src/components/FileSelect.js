import React, { Component } from 'react';

class FileSelect extends Component {

  constructor(props) {
    super(props);

    this.video = '';
    this.thumbs = '';
    this.i = 0;
    this.state = {
      src: '',
      name: ''
    };

    this.handleUploadFile = this.handleUploadFile.bind(this);
  }

  componentDidMount() {
    this.video = document.getElementById('videoNode');
    this.thumbs = document.getElementById('thumbs');
  }

  handleUploadFile = (e) => {
    let videoFile = e.target.files[0];
    let fileURL = URL.createObjectURL(videoFile)
    this.setState( () => {
      return {
        src: fileURL,
        name: videoFile.name
      }
    });

    this.video.currentTime = this.i;

   setTimeout(() => {this.scroll()}, 100);
  }

  scroll = (e) => {

    // Generate timestamp for 10 thumbnails
    let timestamp = this.video.duration/10;

    this.generateThumb(this.video, this.thumbs);
    // when frame is captured, increase
     this.i+= timestamp;

    // if we are not passed end, seek to next interval
    if (this.i <= this.video.duration) {
        // this will trigger another seeked event
        this.video.currentTime = this.i;
    }
    else {
        // DONE!, next action
    console.log("done!")
    }
  }

  generateThumb (video, thumbs) {
    let canvas = document.createElement('canvas');
    let thumb = new Image();
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.style.width = 'inherit';
    canvas.style.height = 'inherit';
    thumb.src = canvas.toDataURL("image/png");
    thumb.alt = this.state.name;
    thumb.width = 120;
    thumbs.appendChild(thumb);
  }

  render () {
    let src = this.state.src;

    return (
      <div>
        <input type="file" accept="video/mp4" onChange={this.handleUploadFile}  name="composer_photo[]" display="inline-block" role="button"/>
         
        <video id="videoNode"  onSeeked ={this.scroll} src={src} style={{display: "none"}} controls="controls"></video>
        <div id="thumbs"/>
      </div>
    )
  }  
}

export default FileSelect;