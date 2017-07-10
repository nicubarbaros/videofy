import React, { Component } from 'react';

import Preview from '../../components/Preview'
import Loader from '../../components/Loader'
import Modal from '../../components/Modal'
import Thumbs from '../../components/Thumb'

class Home extends Component {

  constructor(props) {
    super(props);

    this.video = '';
    this.thumbs = '';
    this.i = 0;

    this.state = {
      src: '',
      name: '',
      thumbs: [],
      selected: null,
      loading: false,
      openModal: false
    };

    this.handleUploadFile = this.handleUploadFile.bind(this);
    this.selectedThumb = this.selectedThumb.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
      }
    });

    this.video.currentTime = this.i;

    // change to async functions
    setTimeout(() => {this.scroll()}, 100);
  }

  scroll = (e) => {

    // Generate timestamp for 10 thumbnails
    let timestamp = this.video.duration/10;
    this.i+= timestamp;


    if (this.i <= this.video.duration) {

      this.generateThumb(this.video, this.thumbs);
      this.video.currentTime = this.i;

      this.setState(() => ({ loading: true }))
    }
    else {
      this.setState(() => ({ loading: false} ))
      console.log("done!")
    }
  }

  generateThumb = (video, thumbs) => {
    let canvas = document.createElement('canvas'),
        ctx = canvas.getContext("2d");

    canvas.height = video.videoHeight;
    canvas.width = video.videoWidth;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    let src = canvas.toDataURL("image/png");
    let alt = this.state.name;
    this.appendImageToState(src, alt);
  }

  appendImageToState = (src, alt) => {
    let newObject = {
      src: src,
      alt: alt
    }

    this.setState((prevState) => ( {thumbs: prevState.thumbs.concat([newObject])} ));
  }

  selectedThumb = (e) => {
    let thumb = e.target;
    this.setState(() => ( {selected: thumb.src} ))
  }

  openModal = (e) => {
    this.setState(() => ( {openModal: true} ))
  }

  closeModal = (e) => {
    this.setState(() => ( {openModal: false} ))
  }

  render () {
    let src = this.state.src;
    console.log(this.state)
    return (
      <div>
        <input type="file" accept="video/mp4" onChange={this.handleUploadFile} display="inline-block" role="button"/>
        <video id="videoNode"  onSeeked ={this.scroll} src={src} style={{display: "none"}}></video>
        {this.state.loading
          ? <Loader text="Extracting video thumbs"/>
          : <Thumbs thumbs={this.state.thumbs} onSelect={this.selectedThumb} selectedThumb={this.state.selected}/>}
        
        {!this.state.selected
          ? <div>Empty</div>
          : <Preview src={this.state.selected} openModal={this.openModal}/>}
        {this.state.openModal && <Modal src={this.state.src} closeModal={this.closeModal}/>}
      </div>
    )
  }  
}

export default Home;