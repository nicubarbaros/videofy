import React, { Component } from 'react';

import Thumbs from './Thumb'

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
    this.selectedThumb = this.selectedThumb.bind(this);
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
        name: videoFile.name,
        loading: false
      }
    });

    this.video.currentTime = this.i;

    // change to async functions
    setTimeout(() => {this.scroll()}, 100);
  }

  scroll = (e) => {

    // Generate timestamp for 10 thumbnails
    let timestamp = this.video.duration/4;
    this.i+= timestamp;

    this.generateThumb(this.video, this.thumbs);

    if (this.i <= this.video.duration) {
      this.video.currentTime = this.i;

      this.setState(() => {
        return {
          loading: true
        }
      })
    }
    else {
      this.setState(() => {
        return {
          loading: false
        }
      })
      console.log("done!")
    }
  }

  generateThumb = (video, thumbs) => {
    let canvas = document.createElement('canvas'),
        thumb = new Image(),
        ctx = canvas.getContext("2d");

    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    this.appendThumbToDom(thumb, thumbs, canvas);
  }

  appendThumbToDom = (thumb, thumbs, canvas) => {
    thumb.src = canvas.toDataURL("image/png");
    thumb.alt = this.state.name;
    thumb.width = 120;
    thumbs.appendChild(thumb);
  }

  selectedThumb = (e) => {
    let thumb = e.target;
    thumb.className = "selected";
  }

  render () {
    let src = this.state.src;
    console.log(this.state)
    return (
      <div>
        <input type="file" accept="video/mp4" onChange={this.handleUploadFile} display="inline-block" role="button"/>
        <video id="videoNode"  onSeeked ={this.scroll} src={src} style={{display: "none"}}></video>
        <Thumbs selectedThumb={this.selectedThumb}/>
      </div>
    )
  }  
}

export default FileSelect;