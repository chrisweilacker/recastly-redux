import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData';


//we pass in state, but never use state?
//define sampleData?
var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
    case 'CHANGE_VIDEO_LIST':
      return action.videos;
    default:
      return state; 
  }

};

export default videoListReducer;
