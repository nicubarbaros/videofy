import React, { Component } from 'react';

import Preview from '../../components/Preview'
import Loader from '../../components/Loader'
import Modal from '../../components/Modal'
import Thumbs from '../../components/Thumb'

import * as utils from '../../utils/utils'
class Home extends Component {

  constructor(props) {
    super(props);

    this.video = '';
    this.thumbs = '';
    this.i = 0;

    this.state = {
      meta: {},
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

    let videoMeta = this.generateVideoMeta(videoFile);

    this.setState( () => {
      return {
        meta: {
          src: fileURL,
          ...videoMeta
        }
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
      let formatedTime = utils.secToMin(this.video.duration);
      let time = {
        duration: utils.formatText(formatedTime)
      }

      let meta = this.state.meta;
      let aspectRatio = this.getVideoAspectRatio(this.video);
      let duration = Object.assign({}, meta, time, aspectRatio)

      this.setState(() => ({ 
        loading: false,
        meta: {
            ...duration
          }
      }))
    }
  }

  generateVideoMeta(video, videoTag){
    let title = utils.formatText(video.name);
    let size = utils.convertToMB(video.size, 1);
    return {
      name: title,
      size: size,
      type: video.type,
    }
  }

  getVideoAspectRatio(video){
    return {
      width: video.videoWidth,
      height: video.videoHeight
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
    let meta = this.state.meta;
    return (
      <div>
        <input type="file" accept="video/mp4" onChange={this.handleUploadFile}/>
        <video id="videoNode"  onSeeked ={this.scroll} src={meta.src} style={{display: "none"}}></video>

        {this.state.loading
          ? <Loader text="Extracting video thumbs"/>
          : <Thumbs thumbs={this.state.thumbs} onSelect={this.selectedThumb} selectedThumb={this.state.selected}/>}

        {this.state.selected && <Preview src={this.state.selected} openModal={this.openModal} meta={this.state.meta}/>}
        {this.state.openModal && <Modal poster={this.state.selected} meta={meta} closeModal={this.closeModal}/>}
      </div>
    )
  }  
}

export default Home;