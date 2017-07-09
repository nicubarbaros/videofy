import React, { Component } from 'react';

class FileSelect extends Component {

  constructor(props) {
    super(props);

    this.video = '';
    this.canvas = '';

    this.state = {
      src: ''
    };
  }

  componentDidMount() {
    this.video = document.getElementById('videoNode');
    this.canvas = document.getElementById('canvas');
  }

  handleUploadFile = (e) => {
    let videoFile = e.target.files[0];
    let fileURL = URL.createObjectURL(videoFile)
    this.setState( () => {
      return {
        src: fileURL
      }
    });

    setTimeout(() => { this.screenshot(this.video, this.canvas)}, 100);
  }

  screenshot (video, canvas) {
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.style.width = 'inherit';
    canvas.style.height = 'inherit';
  }

  render () {
    let src = this.state.src;
    
    return (
      <div>
        <input type="file" accept="video/mp4" onChange={this.handleUploadFile} name="composer_photo[]" display="inline-block" role="button"/>
         
        <video id="videoNode"  style={{display: 'none'}}  src={src} controls="controls">
        </video>
         <canvas id='canvas'></canvas>
      </div>
    )
  }  
}

export default FileSelect;