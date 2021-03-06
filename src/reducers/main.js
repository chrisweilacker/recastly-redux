import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';
import currentVideoReducer from './currentVideo.js';
import videoListReducer from './videoList.js';

//Josh's thinking: import keys currentVideoReducer and videoListReducer
const rootReducer = combineReducers({currentVideo, videoList});
//git push

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
