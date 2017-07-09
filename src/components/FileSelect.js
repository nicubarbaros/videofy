import React, { Component } from 'react';

class FileSelect extends Component {

  constructor(props) {
    super(props);

    this.video = '';
    this.output = '';

    this.state = {
      src: ''
    };
  }

  componentDidMount() {
    this.video = document.getElementById('videoNode');
    this.output = document.getElementById('output');
  }

  handleUploadFile = (e) => {
    let videoFile = e.target.files[0];
    let fileURL = URL.createObjectURL(videoFile)
    this.setState( () => {
      return {
        src: fileURL
      }
    });

    setTimeout(() => {this.screenshot(this.video, this.output)}, 100);
  }

  screenshot (video, output) {
    let canvas = document.createElement('canvas');
    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.style.width = 'inherit';
    canvas.style.height = 'inherit';
    output.src = canvas.toDataURL();
    console.log(canvas);
    return canvas;
  }

  render () {
    let src = this.state.src;

    return (
      <div>
        <input type="file" accept="video/mp4" onChange={this.handleUploadFile} name="composer_photo[]" display="inline-block" role="button"/>
         
        <video id="videoNode"  style={{display: 'none'}}  src={src} controls="controls"></video>
        <img id="output" alt="" src="" width="100" height="auto" class="img"/>
      </div>
    )
  }  
}

export default FileSelect;