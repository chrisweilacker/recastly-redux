import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';


const mapStatetoProps = (state) => {
  return {
    video: state.currentVideo
  }
}

// const mapDispatchtoProps = (dispatch) => {
//   return {


//   }
//}
var VideoPlayerContainer = connect(mapStatetoProps)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
